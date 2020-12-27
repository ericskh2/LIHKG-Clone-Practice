package com.ericskh02.lihkgclone.dao;

import com.ericskh02.lihkgclone.data.Reply;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReplyRepository extends MongoRepository<Reply, String> {

}
