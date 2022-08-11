/*====================
18.  Asynchronous Programming
CMD: [ node 018.Chapter_eighteen/17.checkBox.js]
SUB: Input Box Event Handling
EX: 
===================*/
let name = document.getElementById('name')

name.addEventListener('keypress', function (event){
    if(event.key == 'Enter'){
        // console.log(event.target.value)
        document.getElementById('showName').innerHTML = `Your Name is ${event.target.value}`
        event.target.value = ''
    }
})

let skills = document.getElementsByName('skills')
let result = document.getElementById('result')
let checkedSkills = [];

[...skills].forEach(skills => {
    skills.addEventListener('change', function(event){
        if(event.target.checked){
            checkedSkills.push(event.target.value)
            outputSkills(result, checkedSkills)
            // console.log(checkedSkills)
        } else {
            let ind = checkedSkills.indexOf(event.target.value)
            checkedSkills.splice(ind, 1)
            outputSkills(result, checkedSkills)
            // console.log(checkedSkills)
        }
    })
})

function outputSkills(parent, skills){
    let result = ''
    skills.forEach((skill, index) => {
        result += `(${index + 1}) ${skill} `
    })
    parent.innerHTML = result
}