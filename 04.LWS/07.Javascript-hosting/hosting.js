/**
 * scope হচ্ছে আমরা আমাদের program এর কোন যায়গা থেকে variable access করতে পারবো কোন যায়গা থেকে পারবো সেটা নিয়ে বুঝা।
 * hosting ও হচ্ছে আমরা আমাদের program এর কোন যায়গা থেকে variable access করতে পারবো সেটার ই concept। অর্থ্যাত hosting হলো যখন আমরা কোন variable decllare করি তখন javascript সেটা কিভাবে dill করে সেই concept টা।
 * 
 */

var a;
console.log(a) // undefined
a = "Bangladesh";
console.log(a) // Bangladesh