package io.github.psamsotha.blog;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.filter.ShallowEtagHeaderFilter;

/**
 * @author Paul Samsotha.
 */
@EnableJpaAuditing
@SpringBootApplication
public class PeeskilletBlogApplication {

    public static void main(String... args) {
        SpringApplication.run(PeeskilletBlogApplication.class);
    }

    // https://github.com/spring-projects/spring-hateoas/issues/333
    private static final String HAL_OBJECT_MAPPER = "_halObjectMapper";

    @Autowired
    @Qualifier(HAL_OBJECT_MAPPER)
    private ObjectMapper mapper;

    @Bean
    @Primary
    public ObjectMapper objectMapper() {
        return this.mapper
                .setSerializationInclusion(JsonInclude.Include.NON_NULL)
                .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)

                .configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false)
                .registerModule(new JavaTimeModule());
    }

    @Bean
    public FilterRegistrationBean etagFilter() {
        FilterRegistrationBean filter = new FilterRegistrationBean();
        filter.setFilter(new ShallowEtagHeaderFilter());
        return filter;
    }
}
