package io.github.psamsotha.blog.user.controller;

import io.github.psamsotha.blog.posts.service.CommentService;
import io.github.psamsotha.blog.posts.service.PostService;
import io.github.psamsotha.blog.posts.util.CommentBuilder;
import io.github.psamsotha.blog.posts.util.PostBuilder;
import io.github.psamsotha.blog.posts.util.TagBuilder;
import io.github.psamsotha.blog.user.util.UserBuilder;
import io.github.psamsotha.blog.users.controller.UserController;
import io.github.psamsotha.blog.users.service.UserService;
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

import java.util.Collections;

import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;
import static org.mockito.Matchers.any;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@WebMvcTest(UserController.class)
@EnableSpringDataWebSupport
public class UserControllerTests {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private UserService userService;

    @MockBean
    private PostService postService;

    @MockBean
    private CommentService commentService;


    @Test
    public void testGetUser() throws Exception {
        given(this.userService.getById(any(Long.class)))
                .willReturn(new UserBuilder()
                        .id(1L)
                        .username("testuser")
                        .email("email@email.com")
                        .build());

        this.mvc.perform(get("/api/users/1"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(jsonPath("$._links.self.href", containsString("/api/users/1")))
                .andExpect(jsonPath("$.username", is("testuser")))
                .andExpect(jsonPath("$.email", is("email@email.com")))
                .andExpect(jsonPath("$._links.posts.href", containsString("/api/users/1/posts")))
                .andExpect(jsonPath("$._links.comments.href", containsString("/api/users/1/comments")));
    }

    @Test
    public void testGetUserPosts() throws Exception {
        given(this.postService.getByAuthorId(any(Long.class), any(Pageable.class)))
                .willReturn(new PageImpl<>(
                        Collections.singletonList(new PostBuilder()
                                .id(1L)
                                .content("content")
                                .title("A Title")
                                .author(new UserBuilder().id(1L).build())
                                .addComment(new CommentBuilder().id(1L)
                                        .author(new UserBuilder().id(1L).build()).build())
                                .addTag(new TagBuilder().id(1L).name("spring").postCount(10L).build())
                                .build()),
                        new PageRequest(0, 1),
                        1
                ));

        this.mvc.perform(get("/api/users/1/posts"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(jsonPath("$._links.self.href", containsString("api/users/1/posts?page=0&size=1")))
                .andExpect(jsonPath("$._embedded.posts[0].author._links.self.href", containsString("/api/users/1")));
    }
}
