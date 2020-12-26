import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import Wall from './Wall'
function Reply(props) {
    return (
        <div className="m-5">
            <div className="row">
                <span className="text-secondary m-1">
                    #{props.floor}
                </span>
                <span className="text-primary m-1">
                    {props.author}
                </span>
                <span className="text-secondary m-1">
                    {props.replytime}
                </span>
                <span>

                </span>
                <span>

                </span>
            </div>
            <div className="row">
                <p><h1>{props.content}</h1></p>
            </div>
            <div className="row">
                <div className="text-secondary bg-light">
                <span className="m-1"><FontAwesomeIcon icon={faThumbsUp} /></span>
                <span className="m-1">{props.like}</span>
                <span className="m-1"><FontAwesomeIcon icon={faThumbsDown} /></span>
                <span className="m-1">{props.dislike}</span>
                </div>
            </div>
            <Wall />
        </div>
    );
}

export default Reply