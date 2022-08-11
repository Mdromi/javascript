/*====================
18.  Asynchronous Programming
CMD: [ node 018.Chapter_eighteen/13.styleDOM.js]
SUB: Style DOM
EX: 
===================*/
let title = document.getElementById('title')
// console.log(title.style)

title.style.color = 'orange'
title.style.fontSize = '4rem'
// title.style.background = '#ccc'

let styleObj = {
    background: 'black',
    fontSize: '30px',
    color: '#efefef'
}

let list = document.getElementById('list');

[...list.children].forEach(li => Object.assign(li.style, styleObj))

// Object.assign(list.style, styleObj)