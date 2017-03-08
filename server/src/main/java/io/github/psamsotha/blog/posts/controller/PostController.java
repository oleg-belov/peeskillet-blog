package io.github.psamsotha.blog.posts.controller;

import io.github.psamsotha.blog.common.exception.NotFoundException;
import io.github.psamsotha.blog.posts.domain.Post;
import io.github.psamsotha.blog.posts.domain.PostResource;
import io.github.psamsotha.blog.posts.domain.PostResourceAssembler;
import io.github.psamsotha.blog.posts.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.PagedResources;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

/**
 * @author Paul Samsotha.
 */
@RestController
@RequestMapping(value = "/api/posts", produces = MediaType.APPLICATION_JSON_VALUE)
public class PostController {

    private final PostService postService;
    private final PostResourceAssembler postAssembler;


    @Autowired
    public PostController(PostService postService, PostResourceAssembler postAssembler) {
        this.postService = postService;
        this.postAssembler = postAssembler;
    }

    @GetMapping
    public ResponseEntity<PagedResources<PostResource>> getPosts(Pageable pageable,
                                                                 PagedResourcesAssembler assembler) {

        Page<Post> page = this.postService.getPosts(pageable);
        PagedResources<PostResource> resource = assembler.toResource(page, this.postAssembler);
        return ResponseEntity.ok(resource);
    }

    @GetMapping("{postId}")
    public ResponseEntity<PostResource> getPost(@PathVariable("postId") Long postId) {
        Post post = this.postService.getById(postId);
        if (post == null) {
            throw new NotFoundException("Post with id " + postId + " not found.");
        }
        PostResource resource = this.postAssembler.toResource(post);
        return ResponseEntity.ok(resource);
    }
}
