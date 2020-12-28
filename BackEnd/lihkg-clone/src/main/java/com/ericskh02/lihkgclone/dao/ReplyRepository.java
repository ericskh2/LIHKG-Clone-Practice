package com.ericskh02.lihkgclone.dao;

import com.ericskh02.lihkgclone.data.Reply;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReplyRepository extends MongoRepository<Reply, Integer> {
    @Query("{ 'topicId':  ?0  }")
    List<Reply> findBytopicIdLike(int topicId);
}
