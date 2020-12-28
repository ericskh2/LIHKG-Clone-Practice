package com.ericskh02.lihkgclone.controller;

import com.ericskh02.lihkgclone.data.ReplyList;
import com.ericskh02.lihkgclone.data.TopicList;
import com.ericskh02.lihkgclone.service.ReplyListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class ReplyListController {

    @Autowired
    private ReplyListService replyListService;

    @GetMapping("/reply/{id}")
    public ResponseEntity<ReplyList> getReplyList(@PathVariable("id") String id){
        return ResponseEntity.ok().body(replyListService.getReplyList(Integer.parseInt(id)));
    }
}
