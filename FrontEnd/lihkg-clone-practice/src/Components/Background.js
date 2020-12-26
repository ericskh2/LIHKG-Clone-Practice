import React, { useState } from 'react';

import favicon from '../Image/favicon.png'

function Background(){
    return (
        <div className="col-8 min-vh-100 pt-5 bg-light">
            <img className="mr-3" src={favicon} alt="logo"></img>
            <span>LIHKG 討論區</span>
            <p className="pl-5">練習用</p>
        </div>
    );
}

export default Background