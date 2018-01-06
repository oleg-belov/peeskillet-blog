package io.github.psamsotha.blog.posts.controller;


import io.github.psamsotha.blog.posts.domain.Comment;
import io.github.psamsotha.blog.posts.service.CommentService;
import io.github.psamsotha.blog.posts.util.CommentBuilder;
import io.github.psamsotha.blog.user.util.UserBuilder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDateTime;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@WebMvcTest(CommentController.class)
public class CommentControllerTests {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private CommentService commentService;

    @Test
    public void testGetComment() throws Exception {
        Comment comment = new CommentBuilder()
                .id(1L)
                .dateCreated(LocalDateTime.of(2001, 9, 11, 6, 55))
                .content("Test comment")
                .author(new UserBuilder()
                        .id(1L)
                        .username("Jimbo")
                        .build())
                .build();
        given(commentService.getById(1L))
                .willReturn(comment);

        this.mvc.perform(get("/api/comments/{commentId}", 1L).accept(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(jsonPath("$.content", is("Test comment")))
                .andExpect(jsonPath("$.dateCreated", is("2001-09-11T06:55:00")))
                .andExpect(jsonPath("$.author._links.self.href", containsString("/api/users/1")))
                .andExpect(jsonPath("$._links.self.href", containsString("/api/comments/1")));
    }
}
