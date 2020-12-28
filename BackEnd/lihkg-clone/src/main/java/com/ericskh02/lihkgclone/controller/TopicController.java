package com.ericskh02.lihkgclone.controller;

import com.ericskh02.lihkgclone.data.Reply;
import com.ericskh02.lihkgclone.data.Topic;
import com.ericskh02.lihkgclone.data.UpdateTopic;
import com.ericskh02.lihkgclone.service.ReplyService;
import com.ericskh02.lihkgclone.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class TopicController {

    @Autowired
    private ReplyService replyService;

    @Autowired
    private TopicService topicService;

    @PostMapping("/topic/create")
    public ResponseEntity<Topic> createTopic(@RequestBody Topic topic){
        topicService.createTopic(topic);
        return ResponseEntity.ok().body(topic);
    }

    @PutMapping("topic/update")
    public ResponseEntity<Topic> updateTopic(@RequestBody UpdateTopic updateTopic){
        if(topicService.updateTopic(updateTopic)){
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
