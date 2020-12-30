import { useEffect,useState } from 'react';

import {APIGetTopic,APIGetReply} from '../../API/API'

import TopicTopBar from './TopicTopBar'
import Reply from './Reply/Reply'
import Content from './Content'

function Topic(props) {

    const id = props.id.id;

    const [TopicData,setTopicData] = useState(<div></div>);
    const [ReplyData,setReplyData] = useState(<div></div>);

    function genReplyData(data){
        let generated = [];
        data = data.replyList;
        data.forEach(element => {
            console.log(element)
            generated.push(
                <Reply data={element}/>
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
        console.log(ReplyData);
        setReplyData(genReplyData(ReplyData));
    },[])

    async function getReplyData(){
        const Response = await APIGetReply(id)
        .then(
            res=> {return res}
        ).catch(err=>
            console.log(err)
        );
        return Response.data;
    }

    return (
        <div className="col-8">
            <div>
                {TopicData}
                {ReplyData}
            </div>
        </div>
    );
}

export default Topic