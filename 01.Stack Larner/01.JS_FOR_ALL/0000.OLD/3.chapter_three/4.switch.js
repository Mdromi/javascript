/*====================
4.Switch.js
CMD: [ node 3.chapter_three/6.ternary.js ]
===================*/
var date = new Date()
// 0 - Sunday, 1 - Monday, 2 - Tuesday

//1
var today = date.getDay();
switch(today){
    case 0:
        console.log('Today is Sunday')
        break;
    case 1:
        console.log('Today is Monday')
        break;
    case 2:
        console.log('Today is Tuesday')
        break
    case 3:
        console.log('Today is Wednesday')
        break;
    case 4:
        console.log('Today is Sunday')
        break
    case 5:
        console.log('Today is Thursday')
        break;
    case 6:
        console.log('Today is Friday')
        break;
    default: console.log('Not a Valid Day')
}
//2
var text;
switch (new Date().getDay()) {
    case 4:
    case 5:
      text = "Soon it is Weekend";
      break;
    case 0:
    case 6:
      text = "It is Weekend";
      break;
    case 3:
        text = "Now you are learning Switch Statements";
        break;
    default:
      text = "Looking forward to the Weekend";
    
  } // result [document.getElementById("demo").innerHTML = text;]
  console.log(text) // result ["Now you are learning Switch Statements"]
//3
var fruits;
switch(fruits) {
    case "Banana":
     alert("Hello")
     break;
    case "Apple":
     alert("Welcome")
     break;    
 }
console.log(fruits) // result [undefined]
//4
var value = 1;
switch (value) {
    case 1:
    console.log('I will only run if value === 1');
    // Here, the code "falls through" and will run the code under case 2
    //break;
    case 2:
    console.log('I will run if value === 1 or value === 2');
    break;
    case 3:
    console.log('I will only run if value === 3');
    break;
}
//5
var animal = 'Lion'; //'Dog'
switch (animal) {
    case 'Dog':
    console.log('I will not run since animal !== "Dog"');
    break;
    case 'Cat':
    console.log('I will not run since animal !== "Cat"');
    break;
    default:
    console.log('I will run since animal does not match any other case');
}
//5

function john() {
    return 'John';
}
function jacob() {
    return 'Jacob';
}
switch (john() ) { //john() | "Jane"
    case john(): // Compare name with the return value of john() (name == "John")
    console.log('I will run if name === "John"');
    break;
    case 'Ja' + 'ne': // Concatenate the strings together then compare (name == "Jane")
    console.log('I will run if name === "Jane"');
    break;
    case john() + ' ' + jacob() + ' Jingleheimer Schmidt':
    console.log('His name is equal to name too!');
    break;
}
//6
var x = "c"
    switch (x) {
    case "a":
    case "b":
    case "c":
    console.log("Either a, b, or c was selected.");
    break;
    case "d":
    console.log("Only d was selected.");
    break;
    default:
    console.log("No case was matched.");
    break; // precautionary break if case order changes
}

//7
var rollNo = 6
switch(rollNo){
    case 1:
        console.log('Ramazan')
        break;
    case 2:
        console.log('Sagar')
        break;
    case 3:
        console.log('Niraz')
        break
    case 4:
        console.log('Riyad')
        break;
    case 5:
        console.log('Amit')
        break
    case 6:
        console.log('Dipu')
        break;
    case 7:
        console.log('Mihen')
        break;
    default: console.log('Other')
}