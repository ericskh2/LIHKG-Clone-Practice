package com.ericskh02.lihkgclone.service;

import com.ericskh02.lihkgclone.dao.TopicRepository;
import com.ericskh02.lihkgclone.data.Topic;
import com.ericskh02.lihkgclone.data.TopicList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


@Service
public class TopicListService {

    @Autowired
    private TopicRepository topicRepository;

    public TopicList getTopicList(){
         TopicList topicList = new TopicList(topicRepository.findAll());
         return topicList;
    }

    public TopicList getTopicList(String category){
        TopicList topicList = new TopicList(topicRepository.findByCategoryIdLike(category));
        return topicList;
    }
    public int getLastTopicId(){
        if(topicRepository.count()==0){
            return 0;
        }
        Sort sort = Sort.by(Sort.Order.desc("id"));
        return ((Topic)topicRepository.findAll(sort).toArray()[0]).getId();
    }
}
