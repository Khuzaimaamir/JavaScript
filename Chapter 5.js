a=[1,2,3,false,"khuzaima"]
// console.log(a)
// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(a[3])
// console.log(a[4])
// console.log(a[5])

// a[5]=44
// console.log(a[5])

// a[2]=66
// console.log(a[2])

// let num=[1,2,3,4]
// let b=num.toString()
// console.log(b)

// let c=num.join("_")
// console.log(c,typeof c)

let r =num.pop()
console.log(num,r)

// let p =num.push()
// console.log(num,p)

// let d =num.shift() //removes an element from the start of the array
// console.log(num,d)

// let z =num.unshift(33) //adds an element from the start of the array
// console.log(z)

// let s=[1,2,3,4,5,6,7,8]
// delete s[0]
// console.log(s)

// let f=[1,2,3,4,5,6,7,8]
// let f_more=[9,10,11,12,13]
// let f_more_more=[99,110,111,112,113]

// let set=f.concat(f_more,f_more_more)
// console.log(set)

// let alp=[a,f,b,d,c,g,s,z,u,q]
// alp.sort()
// console.log(alp)

// let compare=(a,b)=>{
// return a - b
// }
// let no=[1,2,3,4,5]
// no.sort(compare)
// // num.reverse()
// console.log(no)

// // SPLICE

// let number=[1,2,3,4,5,6]
// // 2 se start karo
// // 3 elements ko delete kardena
// // and usse aage ke add karte jaana
// number.splice(2,3,1000,1222,1144)
// console.log(number)

// // SLICE
// let h=[1,2,3,4,5,6,7]
// let newnum=h.slice(3,6)
// console.log(newnum)


// let k=[3,2,22,144,21]

// for(let i=0;i<num)

// ARRAY MAP METHOD

// let arr=[22,33,11]
// let a = arr.map((value)=>{
//     console.log(value)
//     return value + 1
// })
// console.log(a)

// dobara isliye likha ke bs isme index or array dal ke find karsakhte
// let arr=[22,33,11]
// let a = arr.map((value,index,array)=>{
//     console.log(value,index,array)

//     // yaha value mai + index + newvar kuch bhi put karsakhte by combining
//     return value + 1
// })
// console.log(a)

// ARRAY FILTER METHOD

// let ar=[1,3,5,6,7,85,4,11]
// let b=ar.filter((a)=>{
//     return a<10
// })
// console.log(b)

// ARRAY REDUCE FUNC

// let ar3=[1,2,3,2,34,56,1]
// let c=ar3.reduce((ar3)=>{
//     return h1+h2
// })
// console.log(c)

// MAKING FUNC AS A VARIABLE  IN IT

let ar4=[1,2,3,2,34,56,1]
const reduce_func  = (h1,h1)=>{
    return h1 + h2
}
let d=ar4.reduce(reduce_func)
console.log(c)

// PRACTICE SET

// ar0=[1,2,3,4,5,6,7]
// let a = prompt("Enter a number")
// let a0 = Number.parseInt(a)
// ar0.push(a)
// console.log(ar0)


ar0=[1,2,3,4,5,6,7]
let a;
do{
  a = prompt("Enter a number")
  a0 = Number.parseInt(a)
  ar0.push(a)
}while (a != 0);
console.log(ar0)