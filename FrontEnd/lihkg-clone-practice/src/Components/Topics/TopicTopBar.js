import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';

import CreateReply from './Reply/CreateReply'
import Wall from './Wall'

function TopicTopBar(props) {

    const [showCreateReply, setShowCreateReply] = useState(false);

    return (
        <div className="row mt-2">
            <CreateReply setShow={{showCreateReply,setShowCreateReply}} topicId={props.topic.id} />
            <div className="col-10">
                <span className="ml-5 pt-2 h2">{props.topic.title}</span>
            </div>
            <div className="col-2">
                <button className="btn" onClick={() => setShowCreateReply(true)}>
                    <FontAwesomeIcon icon={faReply} />
                </button>
            </div>
            <Wall />
        </div>
    );
}

export default TopicTopBar