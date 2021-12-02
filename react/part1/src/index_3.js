// import
import React from 'react';
import ReactDOM from 'react-dom';
// source
let str ={
    title1:'title1',
    title2:'title2'
}
// 컴포넌트
function My(){
    return(
        <div 
            id="main" 
            className="sub" 
            name={5}>
            <p>
                {str.title1}
            </p>
            <p>
                {str.title2}
            </p>
        </div>
    )
}

// export
const root = document.getElementById('root');
ReactDOM.render(
    <My />
    ,
    root
)