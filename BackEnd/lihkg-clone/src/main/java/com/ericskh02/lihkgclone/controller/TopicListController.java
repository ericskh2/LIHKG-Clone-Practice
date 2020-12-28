package com.ericskh02.lihkgclone.controller;

import com.ericskh02.lihkgclone.data.TopicList;
import com.ericskh02.lihkgclone.service.IdDistributeService;
import com.ericskh02.lihkgclone.service.TopicListService;
import com.ericskh02.lihkgclone.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class TopicListController {

    @Autowired
    private TopicListService topicListService;

    @Autowired
    private TopicService topicService;

    @Autowired
    private IdDistributeService idDistributeService;

    @GetMapping("/topics")
    public ResponseEntity<TopicList> getTopicList(){
        return ResponseEntity.ok().body(topicListService.getTopicList());
    }

    @GetMapping("/last")
    public ResponseEntity<Integer> getLastTopicIdTest(){
        return ResponseEntity.ok().body(idDistributeService.getId());
    }
    /*
    @GetMapping("/topics/{category}")
    public ResponseEntity<TopicList> getTopicList(@PathVariable("category") String category){
        return null;
    }
    */



}
