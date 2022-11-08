`use strict`
// parent er donia
function myFunc(){
    // myFunc/child ar dunia
    var x = 10
    console.log(`${x} from myFunc()`);
}
myFunc();
console.log(window.x)