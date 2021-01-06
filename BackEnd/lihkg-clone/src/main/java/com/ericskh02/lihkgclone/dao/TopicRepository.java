package com.ericskh02.lihkgclone.dao;

import com.ericskh02.lihkgclone.data.Reply;
import com.ericskh02.lihkgclone.data.Topic;
import com.ericskh02.lihkgclone.data.TopicList;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TopicRepository extends MongoRepository<Topic, Integer> {
    @Query(value="{ 'category':  ?0  }")
    List<Topic> findByCategoryIdLike(String category);
}
