package io.github.psamsotha.blog.posts.domain;


import io.github.psamsotha.blog.posts.controller.TagController;
import io.github.psamsotha.blog.posts.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.mvc.ResourceAssemblerSupport;
import org.springframework.stereotype.Component;

/**
 * @author Paul Samsotha.
 */
@Component
public class TagResourceAssembler extends ResourceAssemblerSupport<Tag, TagResource> {

    @Autowired
    public TagResourceAssembler() {
        super(TagController.class, TagResource.class);
    }

    @Override
    public TagResource toResource(Tag tag) {
        return createResourceWithId(tag.getId(), tag)
                .name(tag.getName())
                .postCount(tag.getPostCount());
    }
}
