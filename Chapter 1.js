console.log('Hello World')

//VARIABLES//

let a5 = 67
console.log(a5)

var b5 = "harry"
console.log(b5)
//let 8harry=11    //not allowed
let $ = 22           //allowed
console.log($)

let author="Khuzaima"
author =5 //author is already been declared

//DATA TYPES//

// Null
// Number
// Symbol
// String
// Boolean
// Bigint
// Undefined

let a= null;
let b=345;
let c=true;
let d=BigInt('345');
let e="harry";
let f=Symbol('im a nice symbol');
let g=undefined

console.log(a,b,c,d,e,f,g)
console.log(typeof d)

//OBJECTS IN JS//

const items={
  "harry":true,
  "khuzaima":false,
  "lovish":456,
  "rohan":undefined
}
console.log(items["lovish"])

//PRACTICE SET//

//Q1/
let a2 ='khuzaima '
    b2='&'
    c2=' harry'
console.log(a2+b2+c2)

//Q2
console.log(typeof(a+b+c))

//Q3;changing and adding value
//cannot change the value but can add
const a1={
    a:'khuzaima ',
    b:'ali',
    c:' harry'
}
a1["friend"]="rafay"
console.log(a1)

//Q4:making  a dict

const dict={
  ogham:"an alphabetic script used originally for inscriptions in an archaic form of Irish",
  flokati:"a thick, woolen rug with a shaggy pile, originally handwoven in Greece",
  lido:"a fashionable beach resort.",
  wizen:"to wither"
}
console.log(dict.lido)
console.log(dict['lido'])




