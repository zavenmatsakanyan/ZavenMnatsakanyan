
//1.  Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements
starting from a to b spaced by step.

let a=+prompt("First Number")
let b=+prompt("Second Number")
let step=+prompt("Input Step")
let arr=[]
for (let i =a;i<=b;i+=step){
    arr.push(i)}
console.log(arr)


//2. Given a string and a symbol. Find the number of occurrences of the symbol in the string.


let  sentence = prompt("Input Sentence")
let  letter = prompt("Input Letter")
let quantity = 0
for(let i = 0;i<=sentence.length;i++){
  if(sentence[i]===letter)
       quantity+=1
    }alert(quantity)


//3.Given a string. Check whether the string is palindrome or not.


function palindrome(string) {
    let word = string.length;
    for (let i = 0; i < word / 2; i++) {
        if (string[i] !== string[word - 1 - i]) {
            return "It is not a palindrome";
        }
    }
    return "It is a palindrome"
}
let string = prompt("Enter a string: ")
let value = palindrome(string)

alert(value)


//4. Given an array of numbers. Find the maximum element in array.


function largestOfElement(arr) {
        let i;
        let max = arr[0];      
    for (i = 1; i < arr.length; i++) {
            if (arr[i] > max)
                max = arr[i];
        }  
      return max;

//5. Given an array. Create the array which elements are products between two neighbours.


function multiply(arr){
let sum=0;
for(let i=0;i<arr.length-1;i++){
sum=arr[i]
sum=sum*arr[i+1]
 console.log(Number(sum))

	}
}

//6. Given a string and symbols. Change first symbol by the second one in the string.(Kod@ chi ashxatum,bayc sxals chem karoxanum gtnel!!)


let  sentence = prompt("Input Sentence")
let  letter = prompt("Input Letter")
let changeOfLetter = prompt("Change Of Letter")
for(let i = 0;i<sentence.length;i++){
  if(sentence[i]===letter){
      sentence[i] = changeOfLetter 
  }
    }alert(sentence)



7//Print the following number pattern:


let n = +prompt("Number")
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    string += j;
  }
  string += "\n";
}
for (let i = 1; i <= n - 1; i++) {
  for (let j = 1; j <= n - i; j++) {
    string += j;
  }
  string += "\n";
}
console.log(string);