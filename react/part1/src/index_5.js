import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello(props){
    console.log(props);
    return (
        <div id="main" className="sub">
            <h1>welcome</h1>
            <h2 style={
                {
                    color:'blue',
                    fontSize:'30'
                }
            }>
                직접 스타일 넣기</h2>
            <p>과정의 이름 {props.title}</p>
            <p>과정의 명수는 {props.num}</p>
        </div>
    )
}

const root = document.getElementById('root');
ReactDOM.render(
    <Hello title="타이틀" num={20} />
    ,
    root
);