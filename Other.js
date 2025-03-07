let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// 10 elements

for(let i=0; i< arr1.length; i++){
  console.log(arr1[i])
}

let radius = 7;
const pi = 3.14;

let area = radius * radius * pi;

let name = "bob";
let age = 20;

console.log(`\n\n`);

console.log(typeof(name))//string
console.log(typeof(age))//number

console.log(`Hello my name is ${name}, I'm ${age} years old\n`);
//Hello my name is bob, I'm 20 years old.

console.log(`I was born in ${2025 - age}\n`)
//I was born in 2005

console.log('1' == 1); //true
console.log(1 == true); //true
console.log("false" == false); // "false" is not false
console.log("false" == true); // "false" is not true either

if("false")
   console.log("Hello false!", `\n\n`) //but "false" is true enough here


console.log('1' === 1); //false
console.log(1 === true); //false
console.log("true" === true, `\n\n`); //false



for(let i=0; i< 50; i++){
  if(i %3 === 0 && i%5 === 0){ // is divisible by 3 and 5?
    console.log('fizzbuzz');
  }else if(i%3 === 0){ // ok it's not divisible by both how about just 3?
    console.log('fizz');
  }else if(i%5 === 0){ //no? what about just 5 then?
    console.log('buzz');
  }else{              //so its not divisible by 3 or 5 then
    console.log(i);
  }
}

console.log("\n\n");

let nowTimestamp = Date.now();//store the current Date

console.log(nowTimestamp);// current unix timestamp in milliseconds

let now = new Date(nowTimestamp);//today's Date object 

//months go from 0 - 11
let date = new Date(2019, 11, 17, 3, 24, 0);//December 17, 2019 03:24:00
//printing the date

console.log(date.toLocaleDateString("en-US"));//12/17/2019 "en-US"
//1 is added to month because January is 0
console.log(` ${now.getDate()} - ${now.getMonth() + 1} - ${now.getFullYear()} `); // 9 - 2 - 2020 

//Calculate difference between two dates in milliseconds
let difference = now - date;
//convert milliseconds to days

let daysBetween = difference * 1.15741e-8;
console.log(daysBetween, "\n\n");//54.6740790437368





function happyPrint(string){
  console.log("😀: "+string);
 }
 
 function sadPrint(string){
  console.log("😢: "+string);
 }
 
 //This high-order function adds 2 parameters and passes the answer to the callback
 function add(a, b, callback){
    let ans = a + b;
    callback(ans);// call the callback and pass the answer to it
 }
 
 //call add passing the callbacks to it
 
 add(5, 10, happyPrint);
 add(11, 12, sadPrint);

 console.log("\n\n")


  //prints current date
function printDate(){
  console.log(new Date().toLocaleTimeString());
}
     
//setInterval(printDate, 1000); //If you need to run the function once after a delay, setTimeout() can be used instead.` The function would be executed once after the specified time in milliseconds has passed.

let arrE = [] //empty array. Dynamically typed js arrays can have different data types
let arr2 = [1, 2, 3, 4, 5, 6, 7]//initialize with elements
let arr3 = [1, 12.9, "Hi", '🎈', ]// heterogeneous array

console.log(arr2[0]);// 1
console.log(arr3[3], "\n\n");//🎈

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// 10 elements

for(let i=0; i< arr4.length; i++){
  console.log(arr4[i])
}

for (let item of arr4){// for of loop
   console.log(item);
}

console.log("\n\n");

let arr = [ -5, 16, 33, 42, 103, 344];

console.log(arr.includes(-5));//true

arr.push(11);//adds item to the end

console.log(arr)//[ -5, 16, 33, 42, 103, 344, 11];

let lastItem = arr.pop(); //removes last item

console.log(lastItem, arr);//11, [ -5, 16, 33, 42, 103, 344]

arr.unshift(22);//adds item to the front

console.log(arr);//[22, -5, 16, 33, 42, 103, 344]

let firstItem = arr.shift();//removes first item
console.log(firstItem, arr);//22, [-5, 16, 33, 42, 103, 344]

let reversed = arr.reverse();//creates a new array in reverse order 
console.log(reversed);//[344, 103, 42, 33, 16, -5]
console.log(arr.join('-'));//"-5-103-16-33-344-42" joins array with provided separator
console.log("\n\n");




let person = {
  // key : value
  "name": "John",
  "age": 12
};

//we can print the values of a key in two ways
console.log(person["age"]);//Using an index
console.log(person.name);//referencing the key as a property

person["weight"] = 70; // Adding to the object person

person.marks = [67, 34, 55, 89];

let firstMark = person.marks[0];

//mixing array and objects
let people = [
  person,
  {
    name: "Jane",
    age: 23,
    marks: [51, 78, 99, 76]
  }
];

let johnClone = {};//empty object

//copying objects
Object.assign(johnClone, person);

console.log(johnClone);


console.log(people[0].marks[0]);//what is printed?
console.log("\n\n");




//Create a constructor a functions which builds object for us
function createPerson(name, height, weight) {
  return { name: name, height: height, weight: weight };
}

function calcBMI(weight, height) {
  return weight / (height * height);
}

function avgBMI(people) {
  let sum = 0;
  for (let person of people) {
    //sum the bmi of each person
    sum += calcBMI(person.weight, person.height);
  }
  //calculate average
  return sum / people.length;
}

//create a collection of people
people = [
  createPerson("Sally", 60, 2.5),
  createPerson("Ben", 81, 3),
  createPerson("Shelly", 50, 1.7)
];

console.log(avgBMI(people));