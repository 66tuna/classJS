import React from 'react';
import ReactDOM from 'react-dom';

function Black(){
    return (
        <p>black 입니다.</p>
    )
}
function White(){
    return (
        <p>white 입니다.</p>
    )
}
function App(props){
    return (
        props.title === 'black' ? <Black /> : <White />
    )
}

const root = document.getElementById('root');
ReactDOM.render(
    <App title = "white" />,
    root
)