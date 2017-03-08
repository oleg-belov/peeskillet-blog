package io.github.psamsotha.blog.posts.repository;

import io.github.psamsotha.blog.posts.domain.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Paul Samsotha.
 */
public interface TagRepository extends JpaRepository<Tag, Long> {


}
