import { createContext, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import ReplyTopBar from './ReplyTopBar'
import Wall from '../Wall'

const data = {
    "author": "吾城科工狗",
    "replytime": "2020/12/27",
    "floor": 1,
    "like": 10,
    "dislike": 2,
    "content": "都大>Shitty#laugh",
};

function Reply() {
    return (
        <div className="m-5">
                <div className="row">
                    <ReplyTopBar data={data} />
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

export default Reply