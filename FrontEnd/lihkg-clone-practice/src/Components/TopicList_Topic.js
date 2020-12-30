import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

function TopicList_Topic(props) {

    const topics = props.topics;
    function thumbs() {
        if ((topics.like) >= (topics.dislike)) {
            return (<FontAwesomeIcon icon={faThumbsUp} />);
        } else return (<FontAwesomeIcon icon={faThumbsDown} />);
    }
    const href = "/topic/" + topics.id

    return (

        <div className="topiclist_topic">
            <a href={href}>
                <div className="row border-bottom border-grey">
                    <div className="col-1"></div>
                    <div>

                        <div className="pt-2 pb-1">
                            <span className="text-primary">{topics.author}</span>
                            <span className="text-secondary pl-2 pr-2">{topics.createTime}</span>
                            <span className="text-secondary">{thumbs()}</span>
                            <span className="text-secondary pl-1">{topics.like}</span>
                        </div>
                        <div className="pt-1 pb-2">
                            <h5 className="">{topics.title}</h5>
                        </div>

                    </div>

                </div>
            </a>
        </div>
    );
}

export default TopicList_Topic