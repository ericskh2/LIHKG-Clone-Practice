import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

function TopicList_Topic(props) {
    const topics = props.topics;
    function thumbs() {
        if (parseInt(topics.like) >= 0) {
            return (<FontAwesomeIcon icon={faThumbsUp} />);
        } else return (<FontAwesomeIcon icon={faThumbsDown} />);
    }

    return (
        
        <div className="topiclist_topic">
            <div className="row border-bottom border-grey">
                <div className="col-1"></div>
                <div>
                    <div className="pt-2 pb-1">
                        <span className="text-primary">{topics.author}</span>
                        <span className="text-secondary pl-2 pr-2">{topics.posttime}</span>
                        <span className="text-secondary">{thumbs()}</span>
                        <span className="text-secondary pl-1">{topics.like}</span>
                    </div>
                    <div className="pt-1 pb-2">
                        <h5 className="">{topics.title}</h5>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TopicList_Topic