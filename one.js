var a=11
var b=13
var c="56"
console.log(a+b+c)
console.log("mounika")
console.log(6+7)

//print 1 to 10 num
var a=1
while(a<=10){
    console.log(a)
    a++
}

//print 10 to1 num
var a=10
while(a>=1){
    console.log(a)
    a--
}

//print 5 to 15 num
var a=5
while(a<=15){
    console.log(a)
    a++
}

//print 15 to 10
var a=15
while(a<=10){
    a--
} 


//print 1 to 10 even
var a=0
while(a<=10){
 console.log(a)
  a=a+2
}

//print 1 to 10 odd
var a=1
while(a<=10){
 console.log(a)
  a=a+2
}

//Write a program to print 1 to 100 numbers using a for loop
for(a=1;a<=100;a++){
    console.log(a)
}
 //Write a program to print 100 to 1 number using a for loop
 for(a=100;a>=1;a--){
    console.log(a)
}
//. Write a program to print 50 to 150 numbers using For Loop
for(a=50;a<=150;a++){
    console.log(a)
}

// Write a program to print 15 to 10 numbers using for Loop
for(a=15;a>=10;a--){
    console.log(a)
}
// Write a program to print 1 to 10 even numbers using a for loop

for(a=0;a<=10;a=a+2){
    console.log(a)
}
// Write a program to print 1 to 10 odd numbers using For Loop
for(a=1;a<=10;a=a+2){
    console.log(a)
}

//. Write a program to print 1 to 10 numbers using a do while loop
var a=1
do{
    console.log(a)
     a++ 
}
while(a<=10)
//51. Write a program to print 10 to 1 number using a do while loop
var a=10
do{
    console.log(a)
     a--
}
while(a>=1)
//52. Write a program to print 5 to 15 numbers using do while Loop
//53. Write a program to print 15 to 10 numbers using do while Loop
// Write a program to print 1 to 10 even numbers using a do while loop
// Write a program to print 1 to 10 odd numbers using do while Loop
// Write a program first ten multiples of 4 using a while loop (4, 8, 12, 16…)
var a=4
do{
    console.log(a)
    a=a+4
}
while(a<=40)
// Write a program to print a multiplication table of 6 using a while loop.
var a=6
var b=1
while(b<=10){
    var c=a*b
    console.log(a +"*" + b +"="+ c)
       b++
}

/* Write a program Factors of 24 using while loop
(Factors of 24 are 1, ,3, 4, 6, 12, 24)*/




// Write a program to print reverse of digits of numbers
// Write a program to read 5 numbers and print only the even numbers
/* Write a program to print the Fibonacci number series up to a given number.
Expected out 17 -: 0 1 1 2 3 5 8 13*/
// Write a program to check if a given number is an Armstrong number or not.
// What is the difference between Do-While and While Loop?
// How does the Do-While loop work?
// How does the For-Loop work?
// Is it possible to skip or omit parts of the for-loop settings?
// Can you stop a loop based on a specific condition?
// What is the difference between the break statement and the continue directive?




var arr=[1,4, 4,3.5,5]
console.log(arr)
for(var a of arr){
console.log(a)
}
var arr={id:1, emane:4, sal:5}
for(var b in arr){
console.log(b)
}
console.log(arr)
console.log(arr.id)
//taking input from keyboard
const input = require('prompt-sync')();
var a=parseInt(input("eter num"))
var b=parseInt(input("another eter num"))
console.log(a+b)


function add( a, b){
    console.log(a+b)
}

add(2,4)
add(4,6)
add(2,7) 
/*let moni=100
 let add=function(){
    console.log("Addition")
}
add()
add()
add() */

//(()=>{
  //  console.log("Good Morning! Today I & P Match")
//})  ()
const value=require ('prompt-sync')();
const number=parseInt(value('enter'))
if(number % 7==0){
    console.log('true')
}
else{
    console.log('false')
}
var a = prompt('Enter some text%7' );  
console.log(a)