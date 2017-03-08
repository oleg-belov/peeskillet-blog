package io.github.psamsotha.blog.user.domain;

import io.github.psamsotha.blog.user.util.UserBuilder;
import io.github.psamsotha.blog.users.domain.User;
import io.github.psamsotha.blog.users.domain.UserResource;
import io.github.psamsotha.blog.users.domain.UserResourceAssembler;
import io.github.psamsotha.blog.util.WebTestUtils;
import org.junit.Before;
import org.junit.Test;
import org.springframework.hateoas.Link;

import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * @author Paul Samsotha.
 */
public class UserResourceAssemblerUnitTests {

    private UserResource resource;


    @Before
    public void setUp() {
        WebTestUtils.init();

        User user = new UserBuilder()
                .id(1L)
                .name("Jim")
                .username("jimbo")
                .email("jimbo@email.com")
                .location("here")
                .dateCreated(LocalDateTime.now())
                .avatarUrl("avatarUrl")
                .build();

        this.resource = new UserResourceAssembler().toResource(user);
    }

    @Test
    public void setUserResourceProperties() {
        assertThat(this.resource.getName()).isEqualTo("Jim");
        assertThat(this.resource.getUsername()).isEqualTo("jimbo");
        assertThat(this.resource.getEmail()).isEqualTo("jimbo@email.com");
        assertThat(this.resource.getLocation()).isEqualTo("here");
        assertThat(this.resource.getDateCreated()).isNotNull();
        assertThat(this.resource.getAvatarUrl()).isEqualTo("avatarUrl");
    }

    @Test
    public void addSelfLink() {
        assertThat(this.resource.getLink(Link.REL_SELF)).isNotNull();
        assertThat(this.resource.getLink(Link.REL_SELF).getHref())
                .isEqualTo("http://localhost/api/users/1");
    }

    @Test
    public void addPostsLink() {
        assertThat(this.resource.getLink("posts")).isNotNull();
        assertThat(this.resource.getLink("posts").getHref())
                .isEqualTo("http://localhost/api/users/1/posts");
    }

    @Test
    public void addCommentsLink() {
        assertThat(this.resource.getLink("comments")).isNotNull();
        assertThat(this.resource.getLink("comments").getHref())
                .isEqualTo("http://localhost/api/users/1/comments");
    }
}
