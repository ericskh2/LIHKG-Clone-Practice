package com.ericskh02.lihkgclone.service;

import com.ericskh02.lihkgclone.dao.ReplyRepository;
import com.ericskh02.lihkgclone.data.Reply;
import com.ericskh02.lihkgclone.data.ReplyList;
import com.ericskh02.lihkgclone.data.Topic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


@Service
public class ReplyListService {

    @Autowired
    private ReplyRepository replyRepository;

    public ReplyList getReplyList(int topicId){
        ReplyList replyList = new ReplyList(replyRepository.findBytopicIdLike(topicId));
        return replyList;
    }

    public int getLastReplyFloor(){
        if(replyRepository.count()==0)return 0;
        Sort sort = Sort.by(Sort.Order.desc("topicId"));
        return ((Reply)replyRepository.findAll(sort).toArray()[0]).getFloor();
    }
}
