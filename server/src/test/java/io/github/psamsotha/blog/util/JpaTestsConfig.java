package io.github.psamsotha.blog.util;

import io.github.psamsotha.blog.posts.repository.PostRepository;
import io.github.psamsotha.blog.users.repository.UserRepository;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * @author Paul Samsotha.
 */
@Configuration
@EnableJpaAuditing
@EntityScan({"io.github.psamsotha.blog.users.domain", "io.github.psamsotha.blog.posts.domain"})
@EnableJpaRepositories(basePackageClasses = {UserRepository.class, PostRepository.class})
public class JpaTestsConfig {
}
