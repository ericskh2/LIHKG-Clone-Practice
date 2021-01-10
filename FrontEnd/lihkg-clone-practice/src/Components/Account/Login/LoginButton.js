import { useContext } from 'react'
import GoogleLogin from 'react-google-login'
import { GoogleLogout } from 'react-google-login';
import { UserContext } from '../User/UserContext'

import UserInfo from '../User/UserInfo'

function LoginButton() {

    const { userData, setUserData } = useContext(UserContext);

    const responseGoogle = (response) => {
        let tempUserData = response.profileObj;
        setUserData({
            'loggedIn': true,
            'name': tempUserData.name,
            'email': tempUserData.email,
            'imgURL': tempUserData.imageUrl
        });
    }

    const logout = () => {
        setUserData({
            'loggedIn': false,
            'name': "",
            'email': "",
            'imgURL': ""
        });
    }
    if (!userData.loggedIn) {
        return (
            <div className="row text-center">
                <GoogleLogin
                    clientId="255388121595-ugkmupo0flk3r898cnut14bjs0ra5srb.apps.googleusercontent.com"
                    isSignedIn={true}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    
                />

            </div>
        );
    } else {
        return (
            <div className="text-center">
                <UserInfo />

                <GoogleLogout
                    clientId="255388121595-ugkmupo0flk3r898cnut14bjs0ra5srb.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={logout}
                >
                </GoogleLogout>
            </div>
        );
    }

}

export default LoginButton