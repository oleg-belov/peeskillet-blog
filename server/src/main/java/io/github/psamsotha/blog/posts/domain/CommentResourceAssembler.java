package io.github.psamsotha.blog.posts.domain;


import io.github.psamsotha.blog.posts.controller.CommentController;
import io.github.psamsotha.blog.users.controller.UserController;
import io.github.psamsotha.blog.users.domain.User;
import io.github.psamsotha.blog.users.domain.UserResource;
import io.github.psamsotha.blog.users.domain.UserResourceAssembler;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.mvc.ResourceAssemblerSupport;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

/**
 * @author Paul Samsotha.
 */
@Component
public class CommentResourceAssembler extends ResourceAssemblerSupport<Comment, CommentResource> {

    public CommentResourceAssembler() {
        super(CommentController.class, CommentResource.class);
    }

    @Override
    public CommentResource toResource(Comment comment) {
        return createResourceWithId(comment.getId(), comment)
                .content(comment.getContent())
                .dateCreated(comment.getDateCreated())
                .author(createAuthorResource(comment.getAuthor()));
    }

    private UserResource createAuthorResource(User user) {
        return new UserResource()
                .username(user.getUsername())
                .avatarUrl(user.getAvatarUrl())
                .addLink(linkTo(methodOn(UserController.class)
                        .getUser(user.getId())).withRel(Link.REL_SELF));
    }
}
