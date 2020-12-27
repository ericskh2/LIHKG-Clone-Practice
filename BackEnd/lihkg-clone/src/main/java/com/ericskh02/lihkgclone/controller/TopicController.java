package com.ericskh02.lihkgclone.controller;

import com.ericskh02.lihkgclone.data.Reply;
import com.ericskh02.lihkgclone.service.ReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class TopicController {

    @Autowired
    private ReplyService replyService;

    @GetMapping("/test")
    public ResponseEntity test(){
        return ResponseEntity.ok().build();
    }
    @PostMapping("/create/{author}")
    public ResponseEntity createTopic(@PathVariable("author") String author, @RequestBody String content){
        Reply reply = new Reply(author,content);
        replyService.createReply(reply);
        return ResponseEntity.ok().build();
    }
}
