package com.ericskh02.lihkgclone.service;

import com.ericskh02.lihkgclone.dao.ReplyRepository;
import com.ericskh02.lihkgclone.data.Reply;
import com.ericskh02.lihkgclone.data.ReplyList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ReplyListService {

    @Autowired
    private ReplyRepository replyRepository;

    public ReplyList getReplyList(int topicId){
        ReplyList replyList = new ReplyList(replyRepository.findByTopicIdLike(topicId));
        return replyList;
    }

    public int getNextReplyFloor(int topicId){
        List<Reply> list = replyRepository.findByTopicIdLikeDesc(topicId);
        if(list.size()==0)return 0;
        Reply lastReply= list.get(0);
        return lastReply.getFloor()+1;
    }
}
