import { useState,useEffect } from 'react'

import TopBar from './TopBar'
import TopicList_Topic from './TopicList_Topic'

import { APITopicList } from '../API/API'

function TopicList(props) {

   const [response,setResponse] = useState([]);

   var category;

   if(typeof props.category === "undefined"){
       category = "";
   } else {
       category = props.category;
   }

    async function getTopicsFromAPI(){
        var response = await APITopicList(category)
        .then(res=>
            {return res;}
        )
        .catch(err => {
            console.log(err);
        });
        return response;
    }

    async function genTopics() {
        let generated = [];
        const topics = await getTopicsFromAPI();
        topics.data.topicList.forEach(topic => {
            generated.push(<TopicList_Topic key={topic.id} topics={topic} />);
        });
        return generated;
    }

    useEffect(async() => {
        setResponse(await genTopics());
    }, []); //This will run only once 

    return (
        <div className="min-vh-100">
            <TopBar category={props.category} setMenuOpen={props.setMenuOpen}/>
            <div className="mt-5">
                {response}
            </div>
        </div>
    );

        /*
       const topics = [
            {
                "author": "作者",
                "createTime": "10分鐘前",
                "like": 10,
                "dislike": 0,
                "title": "第1個post"
            },
            {
                "author": "連泥住",
                "posttime": "5分鐘前",
                "like": -10,
                "dislike": 0,
                "title": "第2個post"
            }
        ];
        function genTopics() {
            let generated = [];
            topics.forEach(topic => {
                console.log(topic);
                generated.push(<TopicList_Topic topics={topic} />);
            });
            console.log(generated);
            return generated;
        }
    */
}

export default TopicList;
