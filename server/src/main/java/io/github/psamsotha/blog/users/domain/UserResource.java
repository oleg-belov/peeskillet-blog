package io.github.psamsotha.blog.users.domain;

import io.github.psamsotha.blog.common.domain.AbstractResource;
import org.springframework.hateoas.core.Relation;

import java.time.LocalDateTime;

/**
 * @author Paul Samsotha.
 */
@Relation(value = "user", collectionRelation = "users")
public class UserResource extends AbstractResource<UserResource> {

    private String name;
    private String username;
    private String email;
    private String location;
    private String avatarUrl;
    private LocalDateTime dateCreated;

    public String getName() {
        return name;
    }

    public UserResource name(String name) {
        this.name = name;
        return this;
    }

    public String getUsername() {
        return username;
    }

    public UserResource username(String username) {
        this.username = username;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public UserResource email(String email) {
        this.email = email;
        return this;
    }

    public String getLocation() {
        return location;
    }

    public UserResource location(String location) {
        this.location = location;
        return this;
    }

    public String getAvatarUrl() {
        return avatarUrl;
    }

    public UserResource avatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
        return this;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public UserResource dateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
}
