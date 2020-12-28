package com.ericskh02.lihkgclone.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.concurrent.atomic.AtomicInteger;

@Service
public class IdDistributeService {

    @Autowired
    private TopicListService topicListService;

    private AtomicInteger lastid;

    public int getId(){
        if(lastid == null){
            lastid = new AtomicInteger(topicListService.getLastTopicId());
        }
        return lastid.incrementAndGet();
    }
}
