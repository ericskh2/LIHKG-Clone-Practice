package com.ericskh02.lihkgclone.service;

import com.ericskh02.lihkgclone.dao.ReplyRepository;
import com.ericskh02.lihkgclone.data.Reply;
import com.ericskh02.lihkgclone.data.Topic;
import com.ericskh02.lihkgclone.exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReplyService {

    @Autowired
    private ReplyRepository replyRepository;

    @Autowired
    private TopicService topicService;

    @Autowired
    private ReplyListService replyListService;
    public Reply getReply(int id){
        return replyRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Can't find post"));
    }

    public boolean hasReply(int topicId,int floor){
        Optional<Reply> optionalReply = replyRepository.findByTopicIdAndFloorLike(topicId,floor);
        return optionalReply.isPresent();
    }

    public boolean createReply(Reply reply){
        if(!topicService.hasTopic(reply.getTopicId())) return false;
        reply.setFloor(replyListService.getNextReplyFloor(reply.getTopicId()));
        replyRepository.insert(reply);
        return true;
    }

    public void deleteReply(int id){
        replyRepository.deleteById(id);
    }
}
