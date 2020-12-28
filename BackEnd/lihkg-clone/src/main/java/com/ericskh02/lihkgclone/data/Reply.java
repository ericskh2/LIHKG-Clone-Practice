package com.ericskh02.lihkgclone.data;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;


@Document(collection = "reply")
public class Reply {

    @Id
    private ObjectId id;

    private int topicId;
    private String author;
    private String content;

    private int floor;
    private int like;
    private int dislike;

    public Reply(){
        replytime = LocalDateTime.now();
    }

    public Reply(int topicId, String author, String content) {
        this.topicId = topicId;
        this.author = author;
        this.content = content;
        this.floor = 0;
        this.like = 0;
        this.dislike = 0;
        this.replytime = LocalDateTime.now();
    }

    @PersistenceConstructor
    public Reply(ObjectId id,int topicId, String author, String content, int floor, int like, int dislike){
        this.id = id;
        this.topicId = topicId;
        this.author = author;
        this.content = content;
        this.floor = floor;
        this.like = like;
        this.dislike = dislike;
    }
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

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public int getTopicId() {
        return topicId;
    }

    public void setTopicId(int topicId) {
        this.topicId = topicId;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setFloor(int floor) {
        this.floor = floor;
    }

    public void setLike(int like) {
        this.like = like;
    }

    public void setDislike(int dislike) {
        this.dislike = dislike;
    }

    public void setReplytime(LocalDateTime replytime) {
        this.replytime = replytime;
    }



}
