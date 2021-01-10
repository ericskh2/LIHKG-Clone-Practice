import { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import {APILikeTopic,APIDislikeTopic,APIGetTopicLikeCount,APILikeReply,APIDislikeReply} from '../../API/API'
import {UserContext} from '../Account/User/UserContext'

function Like(props) {

    const {userData,setUserData} = useContext(UserContext);
    const data = props.data;

    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [likeCount,setLikeCount] = useState(props.likedata.like);
    const [dislikeCount,setDislikeCount] = useState(props.likedata.dislike);

    let likebutton = <button className="btn btn-light" onClick={likeButton}><FontAwesomeIcon icon={faThumbsUp} /></button>;
    let dislikebutton = <button className="btn btn-light" onClick={dislikeButton}><FontAwesomeIcon icon={faThumbsDown} /></button>;


    //Broken because userData is slower than API
    /*    useEffect(async ()=> {
            let temp = await APIGetIsLiked(data);
            setLiked(temp);
            console.log(liked);
        },[]);
    */

    useEffect(async()=>{
        if(typeof data.category === "undefined"){

        } else {
            let temp = await APIGetTopicLikeCount(data.id);
            setLikeCount(temp.data.like);
            setDislikeCount(temp.data.dislike);
        }
    },[]);

    useEffect(() => {
        if (liked) {
            setLikeCount(likeCount+1);
            likebutton = <button className="btn btn-light active" onClick={likeButton}><FontAwesomeIcon icon={faThumbsUp} /></button>;
        } else {
            likebutton = <button className="btn btn-light" onClick={dislikeButton}><FontAwesomeIcon icon={faThumbsUp} /></button>;
        }
        if (disliked) {
            setDislikeCount(dislikeCount+1);
            dislikebutton = <button className="btn btn-light active" onClick={likeButton}><FontAwesomeIcon icon={faThumbsDown} /></button>
        } else {
            dislikebutton = <button className="btn btn-light" onClick={dislikeButton}><FontAwesomeIcon icon={faThumbsDown} /></button>
        }
    }, [liked, disliked]);

    async function likeButton() {
        if(!userData.loggedIn){
            alert("未登入");
        } else if (typeof data.category === "undefined") { // use to check if it is topic or reply
            const res = await APILikeReply(data);
            (res)?setLiked(true):alert("已Like過/已Dislike過");
        } else {
            const res = await APILikeTopic(data);
            (res)?setLiked(true):alert("已Like過/已Dislike過");
        }
    }

    async function dislikeButton() {
        if(!userData.loggedIn){
            alert("未登入")
        } else if (typeof data.category === "undefined") { // use to check if it is topic or reply
            const res = await APIDislikeReply(data);
            (res)?setDisliked(true):alert("已Like過/已Dislike過");
        } else {
            const res = await APIDislikeTopic(data);
            (res)?setDisliked(true):alert("已Like過/已Dislike過");
        }
    }

    return (
        <div className="text-secondary bg-light">
            {likebutton}
            <span className="m-1">{likeCount}</span>
            {dislikebutton}
            <span className="m-1">{dislikeCount}</span>
        </div>
    );
}

export default Like