package io.github.psamsotha.blog.users.service;

import io.github.psamsotha.blog.users.domain.User;
import io.github.psamsotha.blog.users.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Paul Samsotha.
 */
@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;


    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    public User getById(Long id) {
        return this.userRepository.findOne(id);
    }
}
