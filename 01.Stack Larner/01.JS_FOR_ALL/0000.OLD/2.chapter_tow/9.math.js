/*====================
9.Math.js
===================*/
/*
Constants                       Description                             Approximate
 1. Math.E                          Base of natural logarithm e             2.718
 2. Math.LN10                       Natural logarithm of                    10 2.302
 3. Math.LN2                        Natural logarithm of                    2 0.693
 4. Math.LOG10E                     Base 10 logarithm of e                  0.434
 5. Math.LOG2E                      Base 2 logarithm of e                   1.442
 6. Math.PI                         Pi: the ratio of circle circumference to diameter (π)  3.14
 7. 
 8. Math.SQRT1_2                    Square root of 1/2                       0.707
 9. Math.SQRT2                      Square root of 2                         1.414
 10 .Number.EPSILON                 Difference between one and the smallest
                                    value greater than one representable as
                                                                            2.2204460492503130808472633361816E-16
                                                                            a Number
 11. Number.MAX_SAFE_INTEGER          Largest integer n such that n and n + 1
                                      are both exactly representable as a Number 
                                                                            2^53 - 1
 12. Number.MAX_VALUE                 Largest positive finite value of Number 1.79E+308
 13. Number.MIN_SAFE_INTEGER          Smallest integer n such that n and n - 1 
                                      are both exactly representable as a Number
                                                                            -(2^53 - 1)

 14. Number.MIN_VALUE                 Smallest positive value for Number       5E-324
 15. Number.NEGATIVE_INFINITY         Value of negative infinity               (-∞)
 16. Number.POSITIVE_INFINITY         Value of positive infinity               (∞)
 17. Infinity                         Value of positive infinity               (∞)
*/
/*
Math Properties (Constants)
    JavaScript provides 8 mathematical constants that can be accessed with the Math object:
    Math.E        // returns Euler's number
    Math.PI       // returns PI
    Math.SQRT2    // returns the square root of 2
    Math.SQRT1_2  // returns the square root of 1/2
    Math.LN2      // returns the natural logarithm of 2
    Math.LN10     // returns the natural logarithm of 10
    Math.LOG2E    // returns base 2 logarithm of E
    Math.LOG10E   // returns base 10 logarithm of E 
*/
/* 
Math Object Methods:
    Method                              Description
     1.abs(x) 	                            Returns the absolute value of x
     2. acos(x) 	                        Returns the arccosine of x, in radians
     3. acosh(x)                        	Returns the hyperbolic arccosine of x
     4. asin(x) 	                        Returns the arcsine of x, in radians
     5. asinh(x)                        	Returns the hyperbolic arcsine of x
     6. atan(x) 	                        Returns the arctangent of x as a numeric value between -PI/2 and   PI/2 radians
     7. atan2(y,x) 	                        Returns the arctangent of the quotient of its arguments
     8. atanh(x)                        	Returns the hyperbolic arctangent of x
     9. cbrt(x) 	                        Returns the cubic root of x
     10. ceil(x)                        	Returns x, rounded upwards to the nearest integer
     11. cos(x) 	                        Returns the cosine of x (x is in radians)
     12. cosh(x)                        	Returns the hyperbolic cosine of x
     13. exp(x) 	                        Returns the value of Ex
     14. floor(x)                        	Returns x, rounded downwards to the nearest integer
     15. log(x) 	                        Returns the natural logarithm (base E) of x
     16. max(x, y, z, ..., n) 	            Returns the number with the highest value
     17. min(x, y, z, ..., n) 	            Returns the number with the lowest value
     18. pow(x, y) 	                        Returns the value of x to the power of y
     19. random()                        	Returns a random number between 0 and 1
     20. round(x)                        	Rounds x to the nearest integer
     21. sin(x) 	                        Returns the sine of x (x is in radians)
     22. sinh(x)                        	Returns the hyperbolic sine of x
     23. sqrt(x)                        	Returns the square root of x
     24. tan(x) 	                        Returns the tangent of an angle
     25. tanh(x)                        	Returns the hyperbolic tangent of a number
     26. trunc(x)                        	Returns the integer part of a number (x)
*/

//1
 // console.log(Math.E) //result [2.718281828459045]
 // console.log(Math.PI) //result [3.141592653589793]

//2
 var n = 4.589
 var f = 7
 //console.log(Math.abs(n)) // returns [4.589]
 //console.log(Math.abs(f)) // returns [7]
 //console.log(Math.floor(n)) // returns [4]
 //console.log(Math.ceil(n)) // returns [5]
 // Math.round(x)
 //console.log(Math.round(n)) // returns [5]
 // n = 4.389
 // console.log(Math.round(n)) // returns [4]
 // n = 4.489 
 // console.log(Math.round(n)) // returns [4]
 // n = 4.689 
 // console.log(Math.round(n)) // returns [5]

//3 Math.max(x , y ......, n)
 // console.log(Math.max(400 , 500)) // returns [500]
 // console.log(Math.max(400 , 500 , 700)) // returns [700]
 // console.log(Math.max(-1, -15)) // returns [-1]
 // console.log(Math.min(400 , 500)) // returns [400]
 // console.log(Math.min(-1, -15)) // returns [-15]
 


//4 Math.pow(x , y)
 // console.log(Math.pow(2, 3)) // returns [8]
 // console.log(Math.pow(3, 5)) // returns [243]

//5 Math.sqrt(x)
 // console.log(Math.sqrt(9)) // returns [3]
 // console.log(Math.sqrt(64)) // returns [8]
 // console.log(Math.sqrt(65)) // returns [8.06225774829855]

//6 Math.random(x)
 // console.log(Math.random()) // returns [0.4806919248395445]
 // console.log(Math.round(Math.random())) // returns [1]
console.log(Math.round(Math.random() * 50 +1)) // returns [39] [AnyOutput<=50]
