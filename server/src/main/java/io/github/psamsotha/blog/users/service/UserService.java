package io.github.psamsotha.blog.users.service;

import io.github.psamsotha.blog.users.domain.User;

/**
 * @author Paul Samsotha.
 */
public interface UserService {

    User getById(Long id);
}
