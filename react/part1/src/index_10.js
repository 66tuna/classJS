import React,{useState} from 'react';
import ReactDOM from 'react-dom';

function App(){
let [btn,setBtn] = useState('No');
return(
    <div>
        <h1>title:{btn}</h1>
        <button onClick = {()=>setBtn('No')}>No</button>
        <button onClick = {()=>setBtn('Yes')}>Yes</button>
    </div>
)
}

const root = document.getElementById('root');
ReactDOM.render(
    <App />,
    root
);
