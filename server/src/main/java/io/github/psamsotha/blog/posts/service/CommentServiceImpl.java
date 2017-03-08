package io.github.psamsotha.blog.posts.service;

import io.github.psamsotha.blog.common.exception.NotFoundException;
import io.github.psamsotha.blog.posts.domain.Comment;
import io.github.psamsotha.blog.posts.repository.CommentRepository;
import io.github.psamsotha.blog.users.domain.User;
import io.github.psamsotha.blog.users.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

/**
 * @author Paul Samsotha.
 */
@Component
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;
    private final UserService userService;


    @Autowired
    public CommentServiceImpl(CommentRepository commentRepository, UserService userService) {
        this.commentRepository = commentRepository;
        this.userService = userService;
    }

    @Override
    public Comment getById(Long commentId) {
        return this.commentRepository.findOne(commentId);
    }

    @Override
    public Page<Comment> getByAuthorId(Long authorId, Pageable pageable) throws NotFoundException {
        User user = this.userService.getById(authorId);
        if (user == null) {
            throw new NotFoundException("User with id: " + authorId + " not found.");
        }
        return this.commentRepository.findByAuthor(user, pageable);
    }
}
