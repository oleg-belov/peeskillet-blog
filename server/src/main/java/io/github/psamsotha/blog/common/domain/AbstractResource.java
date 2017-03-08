package io.github.psamsotha.blog.common.domain;

import org.springframework.hateoas.Link;
import org.springframework.hateoas.ResourceSupport;

/**
 * @author Paul Samsotha.
 */
public class AbstractResource<R extends AbstractResource<R>> extends ResourceSupport {

    public R addLink(Link link) {
        super.add(link);
        return  (R) this;
    }
}
