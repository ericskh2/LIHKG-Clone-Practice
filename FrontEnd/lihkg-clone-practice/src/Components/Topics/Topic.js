import { useEffect,useState } from 'react';

import {APIGetTopic} from '../../API/API'

import TopicTopBar from './TopicTopBar'
import Reply from './Reply/Reply'
import Content from './Content'

function Topic(props) {

    const id = props.id.id;

    const [TopicData,setTopicData] = useState(<div></div>);

    async function getTopicDataFromAPI(){
        var Response = await APIGetTopic(id)
        .then(
            res=> {return res}
        ).catch(err=>
            console.log(err)
        );
        return Response;
    }

    async function getTopicData(){
        const Temp = await getTopicDataFromAPI();
        return Temp.data;
    }

    useEffect(async()=>{
        const TempData = await getTopicData();
        setTopicData((
            <div>
                <Content content={TempData.content}/>
            </div>
        ));
    },[])

    return (
        <div className="col-8">
            <div>
                <TopicTopBar />
            </div>
            <div>
                {TopicData}
            </div>
        </div>
    );
}

export default Topic