package com.ericskh02.lihkgclone.data;

import java.util.ArrayList;
import java.util.List;

public class ReplyList {
    private final List<Reply> replyList;

    public ReplyList(){
        this.replyList = new ArrayList<>();
    }

    public ReplyList(List<Reply> replyList){
        this.replyList = new ArrayList<>(replyList);
    }

    public List<Reply> getReplyList(){
        return this.replyList;
    }

}
