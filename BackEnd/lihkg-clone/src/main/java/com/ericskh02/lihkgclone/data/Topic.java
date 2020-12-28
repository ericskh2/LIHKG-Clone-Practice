package com.ericskh02.lihkgclone.data;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "topic")
public class Topic {

    @Id
    private int id;

    private String title;
    private String author;

    private String content;
    private int like;
    private int dislike;


    public Topic(){

    }

    @PersistenceConstructor
    public Topic(int id, String title, String author, String content, int like, int dislike) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.content = content;
        this.like = like;
        this.dislike = dislike;
    }

    public int getId(){
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public String getContent() {
        return content;
    }

    public int getLike() {
        return like;
    }

    public int getDislike() {
        return dislike;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setLike(int like) {
        this.like = like;
    }

    public void setDislike(int dislike) {
        this.dislike = dislike;
    }

}
