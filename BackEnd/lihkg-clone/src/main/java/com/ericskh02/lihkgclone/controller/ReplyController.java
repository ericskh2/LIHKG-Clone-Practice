package com.ericskh02.lihkgclone.controller;

import com.ericskh02.lihkgclone.data.Reply;
import com.ericskh02.lihkgclone.service.ReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class ReplyController {

    @Autowired
    private ReplyService replyService;

    @PostMapping("/reply/create")
    public ResponseEntity<Reply> createReply(@RequestBody Reply reply){
        return (replyService.createReply(reply))? ResponseEntity.ok().body(reply) : ResponseEntity.notFound().build();
    }

}
