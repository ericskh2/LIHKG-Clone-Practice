import { useEffect,useState } from 'react';

import {APIGetTopic,APIGetReply, APIGetReplyLikeCountList} from '../../API/API'


import TopicTopBar from './TopicTopBar'
import Reply from './Reply/Reply'
import Content from './Content'

function Topic(props) {

    const id = props.id.id;

    const [TopicData,setTopicData] = useState(<div></div>);
    const [ReplyData,setReplyData] = useState(<div></div>);

    function genReplyData(data,likedata){
        let generated = [];
        data = data.replyList;
        data.forEach(element => {
            generated.push(
                <Reply key={element.floor} data={element} likedata={likedata[element.floor]}/>
            )
        });
        return generated;
    }

    async function getTopicData(){
        var Response = await APIGetTopic(id)
        .then(
            res=> {return res}
        ).catch(err=>
            console.log(err)
        );
        return Response.data;
    }

    useEffect(async()=>{
        const TempData = await getTopicData();
        setTopicData((
            <div>
                <TopicTopBar topic={TempData}/>
                <Content content={TempData}/>
            </div>
        ));
        const ReplyData = await getReplyData();
        const LikeData = await getReplyLikeData();
        setReplyData(genReplyData(ReplyData,LikeData));
    },[])

    async function getReplyData(){
        const Response = await APIGetReply(id)
        .then(
            res=>res
        ).catch(err=>
            console.log(err)
        );
        return Response.data;
    }

    async function getReplyLikeData(){
        const Response = await APIGetReplyLikeCountList(id)
        .then(
            res=>res
        ).catch(err=>
            console.log(err)
        );
        return Response.data;
    }

    return (
        <div>
            {TopicData}
            {ReplyData}
        </div>
    );
}

export default Topic