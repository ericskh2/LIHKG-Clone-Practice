package com.ericskh02.lihkgclone.data;

import com.ericskh02.lihkgclone.LihkgCloneApplication;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.concurrent.atomic.AtomicInteger;

@Document(collation = "reply")
public class Reply {

    private final int id;

    private final String author;
    private final String content;

    private final int floor;
    private final int like;
    private final int dislike;

    private LocalDateTime replytime;

    public String getAuthor() {
        return author;
    }

    public String getContent() {
        return content;
    }

    public int getFloor() {
        return floor;
    }

    public int getLike() {
        return like;
    }

    public int getDislike() {
        return dislike;
    }

    public LocalDateTime getReplytime() {
        return replytime;
    }

    public Reply(String author, String content) {
        this.id = LihkgCloneApplication.getLastId();
        this.author = author;
        this.content = content;
        this.floor = 0;
        this.like = 0;
        this.dislike = 0;
        this.replytime = LocalDateTime.now();
    }
}
