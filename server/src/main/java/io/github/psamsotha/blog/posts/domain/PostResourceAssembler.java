package io.github.psamsotha.blog.posts.domain;


import io.github.psamsotha.blog.posts.controller.PostController;
import io.github.psamsotha.blog.users.controller.UserController;
import io.github.psamsotha.blog.users.domain.User;
import io.github.psamsotha.blog.users.domain.UserResource;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.mvc.ResourceAssemblerSupport;
import org.springframework.stereotype.Component;

import java.util.List;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

/**
 * @author Paul Samsotha.
 */
@Component
public class PostResourceAssembler extends ResourceAssemblerSupport<Post, PostResource> {

    private final TagResourceAssembler tagAssembler;
    private final CommentResourceAssembler commentAssembler;


    public PostResourceAssembler(TagResourceAssembler tagAssembler,
                                 CommentResourceAssembler commentAssembler) {
        super(PostController.class, PostResource.class);

        this.tagAssembler = tagAssembler;
        this.commentAssembler = commentAssembler;
    }

    @Override
    public PostResource toResource(Post post) {
        return createResourceWithId(post.getId(), post)
                .content(post.getContent())
                .dateCreated(post.getDateCreated())
                .author(createUserResource(post.getAuthor()))
                .tags(createTagResources(post.getTags()))
                .comments(createCommentResources(post.getComments()));
    }

    private UserResource createUserResource(User user) {
        return new UserResource()
                .username(user.getUsername())
                .addLink(linkTo(methodOn(UserController.class)
                        .getUser(user.getId())).withRel(Link.REL_SELF));
    }

    private List<TagResource> createTagResources(List<Tag> tags) {
        return this.tagAssembler.toResources(tags);
    }

    private List<CommentResource> createCommentResources(List<Comment> comments) {
        return this.commentAssembler.toResources(comments);
    }
}
