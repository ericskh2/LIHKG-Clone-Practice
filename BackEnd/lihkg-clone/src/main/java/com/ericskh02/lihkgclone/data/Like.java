package com.ericskh02.lihkgclone.data;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "like")
public class Like {
    @Id
    private ObjectId id;

    private String author;

    private int topicId;

    private int floor;

    private boolean isLikeTopic;

    private boolean isLike;

    public Like(String author, int topicId, int floor, boolean isLikeTopic, boolean isLike) {
        this.author = author;
        this.topicId = topicId;
        this.isLike = isLike;
        this.isLikeTopic = isLikeTopic;
        this.floor = floor;
    }

    @PersistenceConstructor
    public Like(ObjectId id, String author, int topicId, boolean isLike, boolean isLikeTopic, int floor) {
        this.id = id;
        this.author = author;
        this.topicId = topicId;
        this.isLike = isLike;
        this.isLikeTopic = isLikeTopic;
        this.floor = floor;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getTopicId() {
        return topicId;
    }

    public void setTopicId(int topicId) {
        this.topicId = topicId;
    }

    public boolean isLike() {
        return isLike;
    }

    public void setLike(boolean like) {
        isLike = like;
    }

    public int getFloor() {
        return floor;
    }

    public void setFloor(int floor) {
        this.floor = floor;
    }

    public boolean isLikeTopic() {
        return isLikeTopic;
    }

    public void setLikeTopic(boolean likeTopic) {
        isLikeTopic = likeTopic;
    }
}
