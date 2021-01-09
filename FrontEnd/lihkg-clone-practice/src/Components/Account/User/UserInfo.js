import {useContext} from 'react'

import {UserContext} from './UserContext'

function UserInfo(){

    const {userData,setUserData} = useContext(UserContext);

    if(!userData.loggedIn){
        return (<div>
            <p>Login to see</p>
        </div>);
    } else 
    return (
        
        <div className="row text-center">
            <div className="col-12">
                <img className="rounded-circle" src={userData.imgURL}></img>
            </div>
            <div className="col-12">
                <p className="col-md-6 mx-auto">{userData.name}</p>
            </div>
        </div>
    );
}

export default UserInfo;