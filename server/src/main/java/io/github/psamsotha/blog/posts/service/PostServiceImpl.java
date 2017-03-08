package io.github.psamsotha.blog.posts.service;

import io.github.psamsotha.blog.common.exception.NotFoundException;
import io.github.psamsotha.blog.posts.domain.Post;
import io.github.psamsotha.blog.posts.repository.PostRepository;
import io.github.psamsotha.blog.posts.repository.TagRepository;
import io.github.psamsotha.blog.users.domain.User;
import io.github.psamsotha.blog.users.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

/**
 * @author Paul Samsotha.
 */
@Service
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;
    private final TagRepository tagRepository;
    private final UserService userService;


    @Autowired
    public PostServiceImpl(PostRepository postRepository,
                           TagRepository tagRepository,
                           UserService userService) {
        this.postRepository = postRepository;
        this.tagRepository = tagRepository;
        this.userService = userService;
    }

    @Override
    public Post getById(Long id) {
        return this.postRepository.findOne(id);
    }

    @Override
    public Post create(Post post) {
        return this.postRepository.save(post);
    }

    @Override
    public Page<Post> getPosts(Pageable pageable) {
        return this.postRepository.findAll(pageable);
    }

    @Override
    public Page<Post> getLatestPosts(int count) {
        Sort sort = new Sort("dateCreated");
        Pageable pageable = new PageRequest(0, count, sort);
        return getPosts(pageable);
    }

    @Override
    public Page<Post> getByTagName(String tagName, Pageable pageable) {
        return null;
    }

    @Override
    public Page<Post> getByAuthorId(Long authorId, Pageable pageable) throws NotFoundException {
        User user = this.userService.getById(authorId);
        if (user == null) {
            throw new NotFoundException("User with id " + authorId + " not found.");
        }
        return this.postRepository.findByAuthor(user, pageable);
    }
}
