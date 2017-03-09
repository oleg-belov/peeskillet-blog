package io.github.psamsotha.blog.posts.domain;

import io.github.psamsotha.blog.posts.util.CommentBuilder;
import io.github.psamsotha.blog.user.util.UserBuilder;
import io.github.psamsotha.blog.util.WebTestUtils;
import org.junit.Before;
import org.junit.Test;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.mvc.ControllerLinkBuilder;

import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * @author Paul Samsotha.
 */
public class CommentResourceAssemblerUnitTests {

    private CommentResource resource;


    @Before
    public void setUp() {
        WebTestUtils.init();

        Comment comment = new CommentBuilder()
                .id(1L)
                .content("content")
                .dateCreated(LocalDateTime.now())
                .author(new UserBuilder().id(1L).username("user").avatarUrl("avatarUrl").build())
                .build();

        this.resource = new CommentResourceAssembler().toResource(comment);
    }

    @Test
    public void setCommentProperties() {
        assertThat(this.resource.getContent()).isEqualTo("content");
        assertThat(this.resource.getDateCreated()).isNotNull();
    }

    @Test
    public void setSelfLink() {
        assertThat(this.resource.getLink(Link.REL_SELF)).isNotNull();
        assertThat(this.resource.getLink(Link.REL_SELF).getHref())
                .isEqualTo("http://localhost/api/comments/1");
    }

    @Test
    public void setAuthor() {
        assertThat(this.resource.getAuthor()).isNotNull();
        assertThat(this.resource.getAuthor().getUsername()).isEqualTo("user");
        assertThat(this.resource.getAuthor().getAvatarUrl()).isEqualTo("avatarUrl");
        assertThat(this.resource.getAuthor().getLink(Link.REL_SELF)).isNotNull();
        assertThat(this.resource.getAuthor().getLink(Link.REL_SELF).getHref())
                .isEqualTo("http://localhost/api/users/1");
    }
}
