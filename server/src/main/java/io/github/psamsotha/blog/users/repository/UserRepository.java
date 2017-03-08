package io.github.psamsotha.blog.users.repository;

import io.github.psamsotha.blog.users.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Paul Samsotha.
 */
public interface UserRepository extends JpaRepository<User, Long> {
}
