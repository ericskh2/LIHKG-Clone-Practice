import { createContext, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import ReplyTopBar from './ReplyTopBar'
import Wall from '../Wall'
import Like from '../Like'

/*
const data = {
    "author": "writer",
    "replytime": "2020/12/27",
    "floor": 1,
    "like": 10,
    "dislike": 2,
    "content": "Hello world!",
};
*/

function Reply(props) {
    const data = props.data;
    const likedata = props.likedata;
    return (
        <div className="m-5">
                <div className="row">
                    <ReplyTopBar data={data} />
                </div>
                <div className="row">
                    <h1>{data.content}</h1>
                </div>
                <div className="row">
                    <Like data={data} likedata={likedata}/>
                </div>
                <Wall />
        </div>
    );
}

export default Reply