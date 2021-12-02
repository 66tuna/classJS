import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './logo.svg';
//  native-> pubilic 폴더 추천
// import './logo.svg';

const str = 'javascript';

function App(props){
    return (
       <div>
           <h1 id="main" className="sub">Welcome</h1>
           <p>React사용하기 {str}</p>
           <img src={Loading} alt="picture" />
           <p>{props.title}</p>
       </div> 
    );
}

const root = document.getElementById('root');
ReactDOM.render(
    <App title="start" />,
    root
);