package com.ericskh02.lihkgclone.controller;

import com.ericskh02.lihkgclone.data.TopicList;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class TopicListController {
    @GetMapping("/topics/{category}")
    public ResponseEntity<TopicList> getTopicList(@PathVariable("category") String category){
        return null;
    }
}
