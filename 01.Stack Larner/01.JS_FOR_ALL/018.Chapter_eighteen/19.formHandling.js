/*====================
18.  Asynchronous Programming
CMD: [ node 018.Chapter_eighteen/19.formHandling.js]
SUB: Form Handling in DOM
EX: 
===================*/
let form = document.getElementById('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    // console.log(this.elements[0])
    // console.log(this['email'])

    let formData = [];
    [...this.elements].forEach(el => {
        if(el.type != 'submit'){
            formData[el.name] = el.value
        }
    })
    console.log(formData)
    this.reset()
})