import React,{useState} from 'react';
const StringLiteralsExample=()=>{
    const[name,setName]=useState('Students');
    const greetingMessage='Hello,${name}!Welcome to React.';
    return(
        <div>
            <h1>{greetingMessage}</h1>
            <p>Here,we are using string literals to create dynamic text.</p>
            </div>
    );
};
export default StringLiteralsExample;