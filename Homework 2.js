// 1. For a given number calculate the sum of its digits.


let number=+prompt("number")
let sum=0
let lastNumber=0
while(number!=0){
lastNumber=number%10
number=(number-lastNumber)/10
sum+=lastNumber 
}
console.log(sum)
// 2. Given three sides of a triangle. Check whether the triangle is valid or not. Print “yes” if it is valid
and “no&quot; otherwise. (Triangle is valid if the sum of its two sides are greater than the third side).

let a = +prompt(" First Side")
let b = +prompt(" Second Side")
let c = +prompt(" Third Side")
if(Math.pow(a,2) === Math.pow(b,2) + Math.pow(c,2)){
    alert("yes")
    
} else if(Math.pow(b,2) === Math.pow(a,2) + Math.pow(c,2)){
    alert("yes")
}else if(Math.pow(c,2) === Math.pow(a,2) + Math.pow(b,2)){
    alert("yes")
} else{
    alert("no")
}

// 3. Given a number print its digits count.

let number = +prompt("Input Number") 
let quantity = 0
let lastNumber=0
if(number==0){ 
    console.log (quantity+=1)  
}
else { while(number!=0){
lastNumber=number%10
number=(number-lastNumber)/10
quantity+=1
    }
console.log (quantity)      
}  

// 4. Count numbers of digit 9 in a number.

let number=+prompt("number")
let quantity = 0
let lastNumber=0
while(number!=0){
lastNumber=number%10
number=(number-lastNumber)/10
if(lastNumber%10==9){
  quantity+=1
}
}
console.log(quantity)

// 5 Given a positive number. Print it in reverse order.

let number=+prompt("number")
let str=""
let lastNumber=0
while(number!=0){
lastNumber=number%10
number=(number-lastNumber)/10
str=str+lastNumber 
}
console.log(Number(str))




