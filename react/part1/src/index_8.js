import React from 'react';
import ReactDOM from 'react-dom';
//배열
let List = ['title01','title02','title03'] ;

function App(props){
    console.log(props.title);
    return (
        <ul>
            {/* title.map(num =>(실행문)) */}
            {props.title.map((num,index)=>(<li key={index}>{num}</li>))}
        </ul>
    )
}

const root = document.getElementById('root');
ReactDOM.render(
    <App title = {List}/>,
    root
)