/*====================
09. Operator
CMD: [ node 001.Chapter_tow/10.operator.js ]
SUB: Operator
EX: 
===================*/

//Example Variables
var a = 10;
var b = 20;
var c = '20';
var x = 11;
var y = 10;
var r = 'romi';
var f = 'famous';
//console.log(a-b) result [-10]
//console.log(a*b) result [200]
//console.log(a/b) result [0.5]
//console.log(x%y) result [1]
//console.log(a++) result [10],2nd result [11]
//console.log(++a) result [12]
//console.log(b--) result [20],
//console.log(b)   result [19]
//console.log(--b) result [18]
/*
Operator: 
1.Arithmetic Operators:[
1.Addition [+] // example (a+b), result [30]
2.Subtraction [-] // example (a-b), result [-10]
3.Multiplication [*] // example (a*b), result [200]
4.Exponentiation (ES2016) [**] // example (), result []
5.Division [/] // example (a/b), result [0.5]
6.Modulus (Division Remainder) [%] // example (x%y), result [1]

7.Incremental Operators{
    1.Pre Incremental // example (++a), result [12] ;
    2.Post Incremental // example (a++), result [10],2nd result [11];
} [++] // example (a++), result [10];
8.Decrement Operators{
    1.Pre Decrement // example (--b), result [18] ;
    2.Post Decrement // example (b--), result [20],2nd result [19];
} [--] // example (b--), result [20];
];

2.Comparison Operators:[
Operator           Description             Example     
1. ==               Equal 	                x == y
2. === 	            Strict equal 	        x === y
 3. != 	            Unequal 	            x != y
4. !== 	            Strict unequal 	        x !== y
5. < 	            Less than 	            x < y 
 6. <= 	            Less than or equal 	    x <= y
 7. > 	            Greater than 	        x > y
 8. >= 	            Greater than or equal 	x >= y
 
];
3.Logical/Relational Operators:[
1. &&
2. ||
3. !
];
4.Assignment Operators:[
Operator 	Example 	Same As
1. = 	     x = y 	     x = y
2. +=        x += y 	 x = x + y
3. -=        x -= y 	 x = x - y
4. *=        x *= y 	 x = x * y
5. /=        x /= y 	 x = x / y
6. %=        x %= y 	 x = x % y
7. **=       x **= y     x = x ** y
];
5.Conditional/Ternary Operators:[
1. (Condition)? (Asin value) : (Asin value);
];
6.Bitwise Operators:[
Operator 	Name 	                Description
1. & 	    AND 	                 Sets each bit to 1 if both bits are 1
2. | 	    OR 	                     Sets each bit to 1 if one of two bits is 1
3. ^ 	    XOR 	                 Sets each bit to 1 if only one of two bits is 1
4. ~ 	    NOT 	                 Inverts all the bits
5. << 	    Zero fill left shift, 	 shifts left by pushing zeros in from the right and let the leftmost bits fall off
6. >> 	    Signed right shift, 	 Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off.
7. >>> 	    Zero fill right shift, 	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off
];
*/

//1
//************Arithmetic Operators:**************
//i.Addition operator(+)
var z = x + y;
//ii.Subtraction operator (-)
var z = x - y;
//iii.Multiplication operator (*)
var z = x * y;
//iv.Division operator (/)
var z = x / y;
//v.Modulus operator (%)
var z = x % y;
//vi.Increment operator (++)
x++;
++x;
var z = x;
//vii.Decrement operator (--)
x--;
--x;
var z = x;
//viii.Exponentiation operator (**)
var z = x ** 2; // result is 25 
//ix. x ** y produces the same result as Math.pow(x,y):
var z = Math.pow(x,2);   // result is 25
//OR
var m = 100 + 50 * 3; //result 250
var n = (100 + 50) * 3; //result 450
var p = 100 + 50 - 3; //result 147
console.log(m,n,p) //result 250,450,147

//2
//************Comparison Operators:**************
//i.Equal(==)
    //console.log(a==b) // result false
    //console.log(b==c) // result true
    //console.log(a==y) // result true
    
//ii.Strict equal(=== / !====) [Data and DataType = true ]:
    //console.log(a===b) // result false
    //console.log(b===c) // result false
    //console.log(a===y) // result true
    //console.log(a===r) // result false
    //console.log(r===r) // result true
    //console.log(r===f) // result false

//iii.Unequal(!=)
    //console.log(a!=b) // result true
    //console.log(a!=y) // result false

//iv.Strict unequal(!==)
    //console.log(a!==b) // result true
    //console.log(a!==y) // result false
//v.Less than(<)
    console.log(a<b) // result true
    console.log(a<y) // result false
//vi.Less than or equal(<=)
    console.log(a<=b) // result true	            
//vii.Greater than (>)
    console.log(a>b) // result false
    console.log(b>a) // result true
//viii.Greater than or equal (>=)
    console.log(a>=b) // result false
//3
//************Logical/Relational Operators:**************

//4
// ************Assignment Operators:**************
a = a + b; //default
a += b;// result 30
a -= b;// result 10
var z = a**b;
console.log(z)