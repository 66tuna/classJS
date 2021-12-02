import React from 'react';
import ReactDOM from 'react-dom';
let room = {
    str1:'sample01',
    str2:'sample02',
    str3:'sample03'
}

// 출력
const root = document.getElementById('root');
ReactDOM.render(
<ul className="main" id="no01" name={10}>
    <li>{room.str1}</li>
    <li>{room.str2}</li>
    <li>{room.str3}</li>
</ul>,
root
);