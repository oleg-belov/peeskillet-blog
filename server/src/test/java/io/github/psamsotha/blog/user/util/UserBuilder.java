package io.github.psamsotha.blog.user.util;

import io.github.psamsotha.blog.users.domain.User;

import java.time.LocalDateTime;

/**
 * @author Paul Samsotha.
 */
public class UserBuilder {

    private Long id;
    private String name;
    private String username;
    private String password;
    private String email;
    private String location;
    private String avatarUrl;
    private LocalDateTime dateCreated;

    public UserBuilder id(Long id) {
        this.id = id;
        return this;
    }

    public UserBuilder name(String name) {
        this.name = name;
        return this;
    }

    public UserBuilder username(String username) {
        this.username = username;
        return this;
    }

    public UserBuilder password(String password) {
        this.password = password;
        return this;
    }

    public UserBuilder email(String email) {
        this.email = email;
        return this;
    }

    public UserBuilder location(String location) {
        this.location = location;
        return this;
    }

    public UserBuilder avatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
        return this;
    }

    public UserBuilder dateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }

    public User build() {
        User user = new User();
        user.setId(this.id);
        user.setName(this.name);
        user.setUsername(this.username);
        user.setPassword(this.password);
        user.setLocation(this.location);
        user.setEmail(this.email);
        user.setAvatarUrl(this.avatarUrl);
        user.setDateCreated(this.dateCreated);
        return user;
    }
}

