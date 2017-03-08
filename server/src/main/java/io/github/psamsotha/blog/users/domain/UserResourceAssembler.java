package io.github.psamsotha.blog.users.domain;

import io.github.psamsotha.blog.users.controller.UserController;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.mvc.ResourceAssemblerSupport;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

/**
 * @author Paul Samsotha.
 */
@Component
public class UserResourceAssembler extends ResourceAssemblerSupport<User, UserResource> {

    public UserResourceAssembler() {
        super(UserController.class, UserResource.class);
    }

    @Override
    public UserResource toResource(User user) {
        return createResourceWithId(user.getId(), user)
                .name(user.getName())
                .username(user.getUsername())
                .email(user.getEmail())
                .location(user.getLocation())
                .avatarUrl(user.getAvatarUrl())
                .dateCreated(user.getDateCreated())
                .addLink(createPostsLink(user))
                .addLink(createCommentsLink(user));
    }

    private Link createPostsLink(User user) {
        return linkTo(methodOn(UserController.class)
                .getUserPosts(user.getId(), null, null))
                .withRel("posts");
    }

    private Link createCommentsLink(User user) {
        return linkTo(methodOn(UserController.class)
                .getUserComments(user.getId(), null, null))
                .withRel("comments");
    }
}
