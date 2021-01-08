package com.ericskh02.lihkgclone.dao;

import com.ericskh02.lihkgclone.data.Like;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LikeRepository extends MongoRepository<Like, Integer> {

    @Query(value="{ 'topicId':  ?0 , 'isLikeTopic':true, 'isLike': true }",count = true)
    public int countTopicLikeByTopicId(int topicId);
    @Query(value="{ 'topicId':  ?0 , 'isLikeTopic':true, 'isLike': false }",count = true)
    public int countTopicDislikeByTopicId(int topicId);

    @Query(value="{ 'topicId':  ?0 , 'isLikeTopic' : false , 'floor': ?1 ,'isLike': true}",count = true)
    public int countReplyLikeByTopicIdAndFloor(int topicId, int floor);
    @Query(value="{ 'topicId':  ?0 , 'isLikeTopic':true, 'floor': ?1 , 'isLike': false }",count = true)
    public int countReplyDislikeByTopicIdAndFloor(int topicId, int floor);
}
