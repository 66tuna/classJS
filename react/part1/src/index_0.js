import React from 'react';
import ReactDOM from 'react-dom';

// import -> js -> 확장자X
// import -> .css
// 경로 ./


ReactDOM.render(
React.createElement('h1',{style:{color:'red',fontSize:'25px'}},'welcome')
,
document.getElementById('root')
);