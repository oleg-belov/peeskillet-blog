package io.github.psamsotha.blog.posts.service;

import io.github.psamsotha.blog.posts.domain.Tag;
import io.github.psamsotha.blog.posts.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


/**
 * @author Paul Samsotha.
 */
@Service
public class TagServiceImpl implements TagService {

    private final TagRepository tagRepository;

    @Autowired
    public TagServiceImpl(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    @Override
    public Page<Tag> getTags(Pageable pageable) {
        return this.tagRepository.findAll(pageable);
    }

    @Override
    public Tag createTag(Tag tag) {
        return this.tagRepository.save(tag);
    }
}
