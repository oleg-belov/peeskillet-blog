package io.github.psamsotha.blog.users.controller;

import io.github.psamsotha.blog.common.exception.NotFoundException;
import io.github.psamsotha.blog.posts.domain.Comment;
import io.github.psamsotha.blog.posts.domain.CommentResource;
import io.github.psamsotha.blog.posts.domain.CommentResourceAssembler;
import io.github.psamsotha.blog.posts.domain.Post;
import io.github.psamsotha.blog.posts.domain.PostResource;
import io.github.psamsotha.blog.posts.domain.PostResourceAssembler;
import io.github.psamsotha.blog.posts.service.CommentService;
import io.github.psamsotha.blog.posts.service.PostService;
import io.github.psamsotha.blog.users.domain.User;
import io.github.psamsotha.blog.users.domain.UserResource;
import io.github.psamsotha.blog.users.domain.UserResourceAssembler;
import io.github.psamsotha.blog.users.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.PagedResources;
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
@RequestMapping(value = "/api/users", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {


    private final UserService userService;
    private final UserResourceAssembler userAssembler;
    private final PostService postService;
    private final CommentService commentService;
    private final PostResourceAssembler postAssembler;
    private final CommentResourceAssembler commentAssembler;


    @Autowired
    public UserController(UserService userService,
                          UserResourceAssembler userAssembler,
                          PostService postService,
                          PostResourceAssembler postAssembler,
                          CommentService commentService,
                          CommentResourceAssembler commentAssembler) {
        this.userService = userService;
        this.userAssembler = userAssembler;
        this.postService = postService;
        this.postAssembler = postAssembler;
        this.commentService = commentService;
        this.commentAssembler = commentAssembler;
    }


    @RequestMapping(value = "/{userId}", method = RequestMethod.GET)
    public ResponseEntity<UserResource> getUser(@PathVariable("userId") Long userId) {
        User user = this.userService.getById(userId);
        if (user == null) {
            throw new NotFoundException("User with id " + userId + " not found.");
        }
        UserResource resource = this.userAssembler.toResource(user);
        return ResponseEntity.ok(resource);
    }


    @RequestMapping(value = "/{userId}/posts", method = RequestMethod.GET)
    public ResponseEntity<PagedResources<PostResource>> getUserPosts(@PathVariable("userId") Long userId,
                                                                     Pageable pageable,
                                                                     PagedResourcesAssembler assembler) {

        Page<Post> page = this.postService.getByAuthorId(userId, pageable);
        PagedResources<PostResource> resource = assembler.toResource(page, this.postAssembler);
        return ResponseEntity.ok(resource);
    }

    @RequestMapping(value = "/{userId}/comments", method = RequestMethod.GET)
    public ResponseEntity<PagedResources<CommentResource>> getUserComments(@PathVariable("userId") Long userId,
                                                                           Pageable pageable,
                                                                           PagedResourcesAssembler assembler) {

        Page<Comment> page = this.commentService.getByAuthorId(userId, pageable);
        PagedResources<CommentResource> resource = assembler.toResource(page, this.commentAssembler);
        return ResponseEntity.ok(resource);
    }
}
