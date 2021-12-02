import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';


function Picture({title,year,num}){
    return (
        <>
            <h1>{title}</h1>
            <p>{year}</p>
            <p>{num}</p>
        </>
    )
}

const root = document.getElementById('root');
ReactDOM.render(
<Picture title="작품1" year={2001} num={20} />
, root
);