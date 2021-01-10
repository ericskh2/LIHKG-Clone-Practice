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

    @PostMapping("/liketopic")
    public ResponseEntity likeTopic(@RequestBody Like like){
        if(likeService.likeTopic(like)){
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/disliketopic")
    public ResponseEntity dislikeTopic(@RequestBody Like like){
        if(likeService.dislikeTopic(like)){
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/likereply")
    public ResponseEntity likeReply(@RequestBody Like like){
        if(likeService.likeReply(like)){
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/dislikereply")
    public ResponseEntity dislikeReply(@RequestBody Like like){
        if(likeService.dislikeReply(like)){
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/getisliked/{topicId}/{user}")
    public ResponseEntity<Boolean> getIsLiked(@PathVariable("topicId") String topicId, @PathVariable("user") String user){
        return ResponseEntity.ok().body(likeService.getIsUserLikedTopic(user,Integer.parseInt(topicId)));
    }

    @GetMapping("/getreplylikecountlist/{topicId}")
    public ResponseEntity<JSONObject> getReplyLikeCountList(@PathVariable("topicId") String topicId){
        return ResponseEntity.ok().body(likeService.getReplyLikeCountListByTopic(Integer.parseInt(topicId)));
    }
}
