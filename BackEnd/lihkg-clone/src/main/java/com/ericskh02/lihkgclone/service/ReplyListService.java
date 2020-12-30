package com.ericskh02.lihkgclone.service;

import com.ericskh02.lihkgclone.dao.ReplyRepository;
import com.ericskh02.lihkgclone.data.Reply;
import com.ericskh02.lihkgclone.data.ReplyList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;




@Service
public class ReplyListService {

    @Autowired
    private ReplyRepository replyRepository;

    public ReplyList getReplyList(int topicId){
        Sort sort = Sort.by(Sort.Order.asc("floor"));
        ReplyList replyList = new ReplyList(replyRepository.findByTopicIdLike(topicId));
        return replyList;
    }

    public int getNextReplyFloor(){
        Sort sort = Sort.by(Sort.Order.desc("topicId"));
        if(replyRepository.findAll(sort).toArray().length==0)return 0;
        Reply lastReply= (Reply)replyRepository.findAll(sort).toArray()[0];
        return lastReply.getFloor()+1;
    }
}
