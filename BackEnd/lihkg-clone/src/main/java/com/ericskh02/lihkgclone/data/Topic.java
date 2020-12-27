package com.ericskh02.lihkgclone.data;

public class Topic {
    private final String title;
    private final String author;
    private final int like;
    private final int dislike;


    public Topic(String title, String author, int like, int dislike) {
        this.title = title;
        this.author = author;
        this.like = like;
        this.dislike = dislike;
    }


    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public int getLike() {
        return like;
    }

    public int getDislike() {
        return dislike;
    }
}
