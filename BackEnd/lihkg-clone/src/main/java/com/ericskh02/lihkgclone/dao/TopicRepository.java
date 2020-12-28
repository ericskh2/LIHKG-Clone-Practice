package com.ericskh02.lihkgclone.dao;

import com.ericskh02.lihkgclone.data.Topic;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TopicRepository extends MongoRepository<Topic, Integer> {

}
