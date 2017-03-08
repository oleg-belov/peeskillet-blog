package io.github.psamsotha.blog.posts.domain;

import io.github.psamsotha.blog.posts.util.CommentBuilder;
import io.github.psamsotha.blog.posts.util.PostBuilder;
import io.github.psamsotha.blog.posts.util.TagBuilder;
import io.github.psamsotha.blog.user.util.UserBuilder;
import io.github.psamsotha.blog.util.WebTestUtils;
import org.junit.Before;
import org.junit.Test;
import org.springframework.hateoas.Link;

import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * @author Paul Samsotha.
 */
public class PostResourceAssemblerUnitTests {

    private PostResource resource;


    @Before
    public void setUp() {
        WebTestUtils.init();

        Post post = new PostBuilder()
                .id(1L)
                .content("content")
                .dateCreated(LocalDateTime.now())
                .author(new UserBuilder().id(1L).build())
                .addComment(new CommentBuilder().id(1L).build())
                .addTag(new TagBuilder().id(1L).name("spring").postCount(10L).build())
                .build();

        this.resource = new PostResourceAssembler(new TagResourceAssembler(), new CommentResourceAssembler())
                .toResource(post);
    }

    @Test
    public void setPostProperties() {
        assertThat(this.resource.getContent()).isEqualTo("content");
        assertThat(this.resource.getDateCreated()).isNotNull();
    }

    @Test
    public void setSelfLink() {
        assertThat(this.resource.getLink(Link.REL_SELF)).isNotNull();
        assertThat(this.resource.getLink(Link.REL_SELF).getHref())
                .isEqualTo("http://localhost/api/posts/1");
    }
}
