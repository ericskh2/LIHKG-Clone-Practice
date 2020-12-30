import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import FirstFloorTopBar from './Reply/FirstFloorTopBar'
import Wall from './Wall'

function Content(props){
    const data = props.content; 
    return (
            <div className="m-5">
                    <div className="row">
                        <FirstFloorTopBar data={data} />
                    </div>
                    <div className="row">
                        <p><h1>{data.content}</h1></p>
                    </div>
                    <div className="row">
                        <div className="text-secondary bg-light">
                            <span className="m-1"><FontAwesomeIcon icon={faThumbsUp} /></span>
                            <span className="m-1">{data.like}</span>
                            <span className="m-1"><FontAwesomeIcon icon={faThumbsDown} /></span>
                            <span className="m-1">{data.dislike}</span>
                        </div>
                    </div>
                    <Wall />
            </div>
    );
}

export default Content