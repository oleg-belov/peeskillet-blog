package io.github.psamsotha.blog.user.repository;

import io.github.psamsotha.blog.users.domain.User;
import io.github.psamsotha.blog.users.repository.UserRepository;
import io.github.psamsotha.blog.util.JpaTestsConfig;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * @author Paul Samsotha.
 */
@Rollback
@Transactional
@DataJpaTest
@RunWith(SpringRunner.class)
@ContextConfiguration(classes = JpaTestsConfig.class)
public class UserRepositoryIntegrationTests {

    @Autowired
    private UserRepository userRepository;


    @Test
    public void sanityTests() {
        List<User> users = this.userRepository.findAll();
        assertThat(users.size()).isEqualTo(10);
    }
}
