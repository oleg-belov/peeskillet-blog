package io.github.psamsotha.blog.posts.controller;

import io.github.psamsotha.blog.posts.service.PostService;
import io.github.psamsotha.blog.posts.util.CommentBuilder;
import io.github.psamsotha.blog.posts.util.PostBuilder;
import io.github.psamsotha.blog.posts.util.TagBuilder;
import io.github.psamsotha.blog.user.util.UserBuilder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.containsString;
import static org.mockito.BDDMockito.given;
import static org.mockito.Matchers.any;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@WebMvcTest(PostController.class)
public class PostControllerTests {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private PostService service;


    @Test
    public void testGetPost() throws Exception {
        given(this.service.getById(any(Long.class)))
                .willReturn(new PostBuilder()
                        .id(1L)
                        .content("Test content")
                        .author(new UserBuilder()
                                .id(1L).build())
                        .addComment(new CommentBuilder().id(1L)
                                .author(new UserBuilder().id(1L).build()).build())
                        .addTag(new TagBuilder().id(1L).name("spring").postCount(10L).build())
                        .build());

        this.mvc.perform(get("/api/posts/1"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(jsonPath("$._links.self.href", containsString("/api/posts/1")))
                .andExpect(jsonPath("$.author._links.self.href", containsString("/api/users/1")))
                .andExpect(jsonPath("$.tags[0]._links.self.href", containsString("/api/tags/1")))
                .andExpect(jsonPath("$.comments[0]._links.self.href", containsString("/api/comments/1")));
    }
}
