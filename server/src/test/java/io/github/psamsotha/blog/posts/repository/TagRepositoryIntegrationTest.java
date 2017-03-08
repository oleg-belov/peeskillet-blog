package io.github.psamsotha.blog.posts.repository;

import io.github.psamsotha.blog.posts.domain.Tag;
import io.github.psamsotha.blog.util.JpaTestsConfig;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * @author Paul Samsotha.
 */
@Rollback
@Transactional
@DataJpaTest
@RunWith(SpringRunner.class)
@ContextConfiguration(classes = JpaTestsConfig.class)
public class TagRepositoryIntegrationTest {

    @Autowired
    private TagRepository repository;



    @Test
    public void getTagsOrderedByPostCount() {
        PageRequest pageRequest = new PageRequest(0, 10);
    }
}
