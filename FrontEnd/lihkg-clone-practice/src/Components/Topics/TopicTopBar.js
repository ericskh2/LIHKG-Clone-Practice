import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';

import CreateReply from './Reply/CreateReply'
import Wall from './Wall'

function TopicTopBar(props) {

    const [showCreateReply, setShowCreateReply] = useState(false);

    function RenderCreateReply() {
        if (showCreateReply) {
            return (<CreateReply show="true" topicId={props.topic.id} />);
        }
    }

    return (
        <div className="row mt-2">
            {RenderCreateReply()}
            <div className="col-10">
                <span className="ml-5 pt-2">{props.topic.title}</span>
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