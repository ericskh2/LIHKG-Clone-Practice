package com.ericskh02.lihkgclone.controller;

import com.ericskh02.lihkgclone.data.Like;
import com.ericskh02.lihkgclone.service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.json.simple.JSONObject;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class LikeController {
    @Autowired
    private LikeService likeService;

    @GetMapping("/gettopiclike/{topicId}")
    public ResponseEntity<JSONObject> getTopicLike(@PathVariable("topicId") String topicId){
        JSONObject obj = new JSONObject();
        obj.put("like",likeService.getTopicLike(Integer.parseInt(topicId)));
        obj.put("dislike",likeService.getTopicDislike(Integer.parseInt(topicId)));
        return ResponseEntity.ok().body(obj);
    }

    @GetMapping("/getreplylike/{topicId}/{floor}")
    public ResponseEntity<JSONObject> getReplyLike(@PathVariable("topicId") String topicId, @PathVariable("floor") String floor){
        JSONObject obj = new JSONObject();
        obj.put("like",likeService.getReplyLike(Integer.parseInt(topicId),Integer.parseInt(floor)));
        obj.put("dislike",likeService.getReplyDislike(Integer.parseInt(topicId),Integer.parseInt(floor)));
        return ResponseEntity.ok().body(obj);
    }

    @PostMapping("/liketopic/{topicId}")
    public ResponseEntity likeTopic(@PathVariable("topicId") String topicId){
        Like like = new Like("AUTHOR", Integer.parseInt(topicId), 0, true, true);

        if(likeService.likeTopic(like)){
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/likereply/{topicId}/{floor}")
    public ResponseEntity likeReply(@PathVariable("topicId") String topicId, @PathVariable("floor") String floor){
        Like like = new Like("AUTHOR", Integer.parseInt(topicId), Integer.parseInt(floor), false, true);

        if(likeService.likeReply(like)){
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
