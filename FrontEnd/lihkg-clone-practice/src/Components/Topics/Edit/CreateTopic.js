import CreateTopicBar from './CreateTopicBar'

import {APICreateTopic} from '../../../API/API'
import { useState,useEffect } from 'react';

function CreateTopic(props) {

    const [showCreateTopic,setShowCreateTopic] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        var object = {};
        data.forEach((value, key) => object[key] = value);
        object['author'] = '連尼住';
        APICreateTopic(object);
        setShowCreateTopic(false);
    }

    useEffect(
        ()=>{
            setShowCreateTopic(props.show);
        },[]
    );

    let html = <div></div>;
    if(showCreateTopic){
        html =         
        <div className="createtopic overflow-hidden">
        <form onSubmit={handleSubmit}>
            <div className="formgroup text-center mt-5">
                <span className="h4">發表主題</span>
                <button type="button" className="float-right mr-3">X</button>
            </div>
            <div className="formgroup row ml-5 pl-5 mt-5">
                <select name="category" id="category">
                    <option value="1">吹水台</option>
                    <option value="2">創意台</option>
                </select>
                <input type="text" class="form-control col-9 ml-2" id="title" name="title" aria-describedby="Title" aria-label="標題" placeholder="標題"></input>
            </div>
            <div className="formgroup text-center mt-5">
                <textarea id="content" name="content" rows="20" cols="100" className="bg-light">
                    
                </textarea>
            </div>
            <div className="formgroupmt-5">
                <input type="submit" value="提交" className="float-right mr-5"></input>
            </div>
        </form>
    </div>
    } else {
        html = <div></div>
    }

    return (
        <div>
            {html}
        </div>
    );
}

export default CreateTopic