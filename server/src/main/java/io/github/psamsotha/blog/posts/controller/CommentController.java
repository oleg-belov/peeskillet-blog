package io.github.psamsotha.blog.posts.controller;

import io.github.psamsotha.blog.common.exception.NotFoundException;
import io.github.psamsotha.blog.posts.domain.Comment;
import io.github.psamsotha.blog.posts.domain.CommentResource;
import io.github.psamsotha.blog.posts.domain.CommentResourceAssembler;
import io.github.psamsotha.blog.posts.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Paul Samsotha.
 */
@RestController
@RequestMapping(value = "/api/comments", produces = MediaType.APPLICATION_JSON_VALUE)
public class CommentController {

    private final CommentService commentService;
    private final CommentResourceAssembler commentAssembler;


    @Autowired
    public CommentController(CommentService commentService,
                             CommentResourceAssembler commentAssembler) {
        this.commentService = commentService;
        this.commentAssembler = commentAssembler;
    }


    @RequestMapping(value = "/{commentId}", method = RequestMethod.GET)
    public ResponseEntity<CommentResource> getComment(@PathVariable("commentId") Long commentId) {
        Comment comment = this.commentService.getById(commentId);
        if (comment == null) {
            throw new NotFoundException("Comment with id " + commentId + " not found.");
        }
        CommentResource resource = this.commentAssembler.toResource(comment);
        return ResponseEntity.ok(resource);
    }
}

