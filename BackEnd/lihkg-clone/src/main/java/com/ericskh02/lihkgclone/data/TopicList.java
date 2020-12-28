package com.ericskh02.lihkgclone.data;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

public class TopicList {

    private final List<Topic> topicList;

    public TopicList(){
        this.topicList = new ArrayList<>();
    }
    public TopicList(List<Topic> topicList){
        this.topicList = new ArrayList<>(topicList);
    }

    public List<Topic> getTopicList() {
        return topicList;
    }

}
