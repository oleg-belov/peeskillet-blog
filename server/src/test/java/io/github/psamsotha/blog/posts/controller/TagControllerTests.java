package io.github.psamsotha.blog.posts.controller;

import io.github.psamsotha.blog.posts.domain.Tag;
import io.github.psamsotha.blog.posts.service.TagService;
import io.github.psamsotha.blog.posts.util.TagBuilder;
import org.apache.http.HttpHeaders;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.config.EnableSpringDataWebSupport;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;

import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;
import static org.mockito.Matchers.any;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@WebMvcTest(TagController.class)
@EnableSpringDataWebSupport
public class TagControllerTests {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private TagService service;


    @Test
    public void testGetTags() throws Exception {
        given(this.service.getTags(any(Pageable.class)))
                .willReturn(new PageImpl<>(
                        Arrays.asList(
                                new TagBuilder().id(1L).name("one").postCount(10L).build(),
                                new TagBuilder().id(2L).name("two").postCount(10L).build()),
                        new PageRequest(0, 2),
                        1)
                );

        this.mvc.perform(get("/api/tags").param("page", "1").param("size", "2"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(jsonPath("$._embedded.tags[0].name", is("one")))
                .andExpect(jsonPath("$._embedded.tags[0].postCount", is(10)))
                .andExpect(jsonPath("$._embedded.tags[0]._links.self.href", containsString("/api/tags/1")))
                .andExpect(jsonPath("$._embedded.tags[1].name", is("two")))
                .andExpect(jsonPath("$._embedded.tags[1].postCount", is(10)))
                .andExpect(jsonPath("$._embedded.tags[1]._links.self.href", containsString("/api/tags/2")))
                .andExpect(jsonPath("$._links.self.href", containsString("/api/tags?page=0&size=2")))
                .andExpect(jsonPath("$.page.size", is(2)))
                .andExpect(jsonPath("$.page.totalElements", is(2)))
                .andExpect(jsonPath("$.page.totalPages", is(1)));
    }

    @Test
    public void testGetTag() throws Exception {
        given(this.service.getById(any(Long.class)))
                .willReturn(new TagBuilder().id(1L).name("one").postCount(10L).build());

        this.mvc.perform(get("/api/tags/1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(jsonPath("$._links.self.href", containsString("/api/tags/1")))
                .andExpect(jsonPath("$.name", is("one")))
                .andExpect(jsonPath("$.postCount", is(10)));
    }

    @Test
    public void testCreateTag() throws Exception {
        given(this.service.createTag(any(Tag.class)))
                .willReturn(new TagBuilder().id(1L).name("one").postCount(0L).build());

        this.mvc.perform(post("/api/tags", new TagBuilder().name("one").build())
                        .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isCreated())
                .andExpect(header().string(HttpHeaders.LOCATION, containsString("/api/tags/1")))
                .andExpect(jsonPath("$._links.self.href", containsString("/api/tags/1")))
                .andExpect(jsonPath("$.name", is("one")))
                .andExpect(jsonPath("$.postCount", is(0)));
    }
}
