package com.ericskh02.lihkgclone.service;

import com.ericskh02.lihkgclone.dao.ReplyRepository;
import com.ericskh02.lihkgclone.data.Reply;
import com.ericskh02.lihkgclone.exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReplyService {
    @Autowired
    private ReplyRepository replyRepository;

    public Reply getReply(String id){
        return replyRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Can't find post"));
    }

    public Reply createReply(Reply reply){
        return replyRepository.insert(reply);
    }

    public void deleteReply(String id){
        replyRepository.deleteById(id);
    }
}
