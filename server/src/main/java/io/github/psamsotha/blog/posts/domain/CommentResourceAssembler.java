package io.github.psamsotha.blog.posts.domain;


import io.github.psamsotha.blog.posts.controller.CommentController;
import org.springframework.hateoas.mvc.ResourceAssemblerSupport;
import org.springframework.stereotype.Component;

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
                .dateCreated(comment.getDateCreated());
    }
}
