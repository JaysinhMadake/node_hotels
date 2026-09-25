//let and var can be reassigned but const can not be reassigned
//var can be redeclared but let and const does not but let and var can be redeclared in separete block so let has block scope
//var has function scope
// let a=4;
// a=7;
// console.log(a)

// var b=6;
// var b=8;

// console.log(b)

// const c=7;
// console.log(c)

// hello=()=>{
// let a=5;
// const c=10;
// console.log("value of redeclared a is:"+a);
// console.log("value of redeclared c is:"+c);
// }
// hello();

// //creating function in javascript
// //1 st method
// function hello1(){
//     console.log("this is 1st function")
// }

// hello2=()=>{
//     console.log("this is 2nd function")
// }

// const hello3=function(){
//     console.log("this is 3rd function")
// }
// const hello4=()=>{
//     console.log("this is 4th funnction")
// }

// hello1()
// hello2()
// hello3()
// hello4()


//array can store different  types of datatypes
//typeof(variable) gives which type of varible it is eg string number
//arrayname.length is used to find the length of the array
//array can store different types of datatypes

// let arr=['jay','ajay','vijay','sanjay']

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
//     console.log(typeof(arr[i]))
// }

// var arr=[1,'jay',5.4]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
//     console.log(typeof(arr[i]))
// }

//push()= add at end
var arr=[1]
arr.push("jay")
console.log(arr)

//pop()-remove from end
arr.pop()
console.log(arr)

//unshift() add at the beginning
arr.unshift(2)
console.log(arr)

//shift() remove from the beginning
arr.shift()
console.log(arr)

//includes() check whether array contains that element or not
console.log(arr.includes(1))