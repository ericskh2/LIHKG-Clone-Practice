package com.ericskh02.lihkgclone.service;

import com.ericskh02.lihkgclone.dao.TopicRepository;
import com.ericskh02.lihkgclone.data.Topic;
import com.ericskh02.lihkgclone.exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TopicService {

    @Autowired
    private TopicRepository topicRepository;

    @Autowired
    private IdDistributeService idDistributeService;

    public Topic getTopic(String id){
        return topicRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Can't find post"));
    }

    public Topic createTopic(Topic topic){
        topic.setId(idDistributeService.getId());
        return topicRepository.insert(topic);
    }

    public void deleteTopic(String id){ topicRepository.deleteById(id);
    }
}
