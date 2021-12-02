import React,{useState} from 'react';
import ReactDOM from 'react-dom';

function App(){
// state 만들기
let [year,setYear] = useState(2021);
return(
    <div>
        <p>올해는 : {year}</p>
        <button onClick={()=>setYear(year+1)}> 더하기</button>
    </div>
)
}

const root = document.getElementById('root');
ReactDOM.render(
    <App />,
    root
);