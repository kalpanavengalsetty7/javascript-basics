import React,{useState} from 'react';
const WelcomeMessage=()=>{
    return <h1>Welcome! you are logged in.</h1>
};
const LoginMessage=()=>{
    return<h1>Please log in to conitnue.</h1>;
};
const ConditionalRenderingApp=()=>{
    const[isLoggedIn,setIsLoggedIn]=useState(false);
    const toggleLoginStatus=()=>{
        setIsLoggedIn(!isLoggedIn);
    };
    return(
        <div className="app-container">
            {isLoggedIn?<WelcomeMessage/>:<LoginMessage/>}
            <button
            className={'toggle-button${isLoggedIn?'logout':'login'}'}
            onClick={toggleLoginStatus}
            >
                {isLoggedIn?'Log Out':'Log In'}
                </button>
                </div>
    );
};
export default ConditionalRenderingApp;