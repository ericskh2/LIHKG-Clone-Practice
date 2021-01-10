package com.ericskh02.lihkgclone.service;

import com.ericskh02.lihkgclone.dao.LikeRepository;
import com.ericskh02.lihkgclone.data.Like;
import com.ericskh02.lihkgclone.data.Reply;
import com.ericskh02.lihkgclone.data.ReplyList;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikeService {
    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private TopicService topicService;

    @Autowired
    private ReplyService replyService;

    @Autowired
    private ReplyListService replyListService;

    public boolean likeTopic(Like like){
        if(!topicService.hasTopic(like.getTopicId())) return false;
        if(this.getIsUserLikedOrDislikedTopic(like.getAuthor(),like.getTopicId())) return false;
        likeRepository.insert(like);
        return true;
    }

    public boolean dislikeTopic(Like like){
        if(!topicService.hasTopic(like.getTopicId())) return false;
        if(this.getIsUserLikedOrDislikedTopic(like.getAuthor(),like.getTopicId())) return false;
        likeRepository.insert(like);
        return true;
    }

    public boolean likeReply(Like like){
        if(!replyService.hasReply(like.getTopicId(),like.getFloor())) return false;
        if(this.getIsUserLikedOrDislikedReply(like.getAuthor(),like.getTopicId(),like.getFloor())) return false;
        likeRepository.insert(like);
        return true;
    }

    public boolean dislikeReply(Like like){
        if(!replyService.hasReply(like.getTopicId(),like.getFloor())) return false;
        if(this.getIsUserLikedOrDislikedReply(like.getAuthor(),like.getTopicId(),like.getFloor())) return false;
        likeRepository.insert(like);
        return true;
    }

    public int getTopicLike(int topicId){
        return likeRepository.countTopicLikeByTopicId(topicId);
    }

    public int getTopicDislike(int topicId){
        return likeRepository.countTopicDislikeByTopicId(topicId);
    }

    public int getReplyLike(int topicId, int floor){
        return likeRepository.countReplyLikeByTopicIdAndFloor(topicId,floor);
    }

    public int getReplyDislike(int topicId, int floor){
        return likeRepository.countReplyDislikeByTopicIdAndFloor(topicId,floor);
    }

    public boolean getIsUserLikedTopic(String user, int topicId) {
        return (likeRepository.getIsUserLikedByTopicId(user,topicId) >= 1);
    }

    public boolean getIsUserDislikedTopic(String user, int topicId){
        return (likeRepository.getIsUserDislikedByTopicId(user,topicId) >= 1);
    }

    public boolean getIsUserLikedOrDislikedTopic(String user, int topicId){
        return this.getIsUserLikedTopic(user,topicId) || this.getIsUserDislikedTopic(user,topicId);
    }

    public boolean getIsUserLikedReply(String user, int topicId, int floor) {
        return (likeRepository.getIsUserLikedByTopicIdAndFloor(user,topicId,floor) >= 1);
    }

    public boolean getIsUserDislikedReply(String user, int topicId, int floor) {
        return (likeRepository.getIsUserDislikedByTopicIdAndFloor(user,topicId,floor) >= 1);
    }

    public boolean getIsUserLikedOrDislikedReply(String user, int topicId, int floor){
        return this.getIsUserLikedReply(user,topicId,floor) || this.getIsUserDislikedReply(user,topicId,floor);
    }

    public JSONObject getReplyLikeCountListByTopic(int topicId){
        ReplyList replyList = replyListService.getReplyList(topicId);
        JSONObject replyLikeCount = new JSONObject();
        for(Reply reply : replyList.getReplyList()){
            JSONObject obj = new JSONObject();
            int floor = reply.getFloor();
            obj.put("like",this.getReplyLike(topicId,floor));
            obj.put("dislike",this.getReplyDislike(topicId,floor));
            replyLikeCount.put(floor,obj);
        }
        return replyLikeCount;
    }
}
