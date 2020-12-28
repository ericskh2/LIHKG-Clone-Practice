package com.ericskh02.lihkgclone.service;

import com.ericskh02.lihkgclone.dao.TopicRepository;
import com.ericskh02.lihkgclone.data.Topic;
import com.ericskh02.lihkgclone.data.UpdateTopic;
import com.ericskh02.lihkgclone.exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TopicService {

    @Autowired
    private TopicRepository topicRepository;

    @Autowired
    private IdDistributeService idDistributeService;

    public boolean hasTopic(int id){
        Optional<Topic> optionalTopic = topicRepository.findById(id);
        return optionalTopic.isPresent();
    }

    public Topic getTopic(int id){
        return topicRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Can't find post"));
    }

    public Topic createTopic(Topic topic){
        topic.setId(idDistributeService.getId());
        return topicRepository.insert(topic);
    }

    public boolean updateTopic(UpdateTopic updateTopic){
        if(!this.hasTopic(updateTopic.getId())){
            return false;
        }
        Topic updatedTopic = this.getTopic(updateTopic.getId());
        updatedTopic.setContent(updatedTopic.getContent());
        topicRepository.save(updatedTopic);
        return true;
    }

    public void deleteTopic(int id){
        topicRepository.deleteById(id);
    }
}
