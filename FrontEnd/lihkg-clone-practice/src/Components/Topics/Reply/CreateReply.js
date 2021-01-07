import { useState, useEffect, useContext } from 'react'

import { APICreateReply } from '../../../API/API'
import {UserContext} from '../../Account/User/UserContext'

function CreateReply(props) {

    const {userData,setUserData} = useContext(UserContext);
    const [showCreateReply, setShowCreateReply] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        if(userData.loggedIn){
            const data = new FormData(event.target);
            var object = {};
            data.forEach((value, key) => object[key] = value);
            object['author'] = userData.name;
            object['topicId'] = props.topicId;
            APICreateReply(object);
            console.log(object)
            
        } else {
            alert("未登入!")
        }
        setShowCreateReply(false);
    }

    var html = <div></div>

    useEffect(
        () => {
            setShowCreateReply(props.show);
        }, []
    );

    if (showCreateReply) {
        html =
            <div className="createtopic">
                <form onSubmit={handleSubmit}>
                    <div className="formgroup text-center mt-5">
                        <span className="h4">回覆</span>
                        <button type="button" className="float-right mr-3">X</button>
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
        { html }
        </div>
    );
}

export default CreateReply