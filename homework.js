1.	let a = +prompt ("Nermucel Tiv")
        let b = +prompt ("Nermucel Tiv")
        if( a >b ){
        	alert (a + b)
        	alert(a - b ) 
        	alert (a * b )
        	alert(a / b )
        	alert(a % b )
    
         } else {
         	alert("a-n mec chi b")
          }





2.  	let name = prompt("What is your name?") 
    	let age  = prompt("How old are you?")
	alert("My name is " + name + " ." + "I am  " +  age )



3.     let a = +prompt("Nermucel Tiv")
           alert( a % 10)
     

4.    let a = +prompt("Nermucel Tiv")
      if(a >=0){
    	alert("No")
    }else{
    	alert("Yes")
     }



5.   let a = +prompt("First Number")
     let b = +prompt("Secind Number")
     if ( a%b ===0){
     	alert("1")
     }else{
     	alert("0")


6.    const number = prompt()

	switch(number){
   	 case '1' : {
            console.log("January")
            break;
       	 }
   	 case '2' : {
        console.log("February ")
        break;
   	 }
    	case '3' : {
        console.log("March")
        break;
    	}
    	case '4' : {
        console.log("April")
        break;
    	}
   	 case '5' : {
        console.log("May")
        break;
    	}
    	case '6' : {
        console.log("June")
        break;
    	}
        case'7' : {
            console.log("July")
            break;
        }
   	 case '8' : {
        console.log("August")
        break;
    	}
    	case '9' : {
    	    console.log("September")
        break;
    	}   
    	case '10' : {
        console.log("October")
        break;
   	 }
   	 case ' 11' : {
        console.log("November")
        break;
   	 }
    	case '12' : {
        console.log("November")
        break;
    	}
        default : {
            console.log("InPut  Numbers from 1 to 12")
        }
	} 
	}




6.	const number = +prompt()

	switch(number){
    	case 1 : 
            console.log("January")
            break;
        
     	case 2 : 
        console.log("February ")
        break;
    
    	case 3 : 
        console.log("March")
        break;
    
    	case 4 : 
        console.log("April")
        break;
    
    	case 5 : 
        console.log("May")
        break;
    
    	case 6 : 
        console.log("June")
        break;
    
        case 7 : 
            console.log("July")
            break;
        
    	case 8: 
        console.log("August")
        break;
    
    	case 9 : 
        console.log("September")
        break;
    
    case 10 : 
        console.log("October")
        break;
    
    case 11 : 
        console.log("November")
        break;
    
    case 12 : 
        console.log("November")
        break;
    
        default : 
            console.log("InPut  Numbers from 1 to 12")
            }



7.	let a = +prompt("First Number")
	let b = +prompt("Second Number")
	let c = +prompt("Third Number")
	if(a>b && a>c){
    	alert ("Max Value"+" " + a)
	}else if( a < b && c < b ){
    	alert ("Max Value"+ " " + b)
	} else if(c > a && c > b ){
    	alert ("Max Value"+" " + c)
	}else if(a===b && a > c){
    	alert ("Max Value"+" " + a)
	}else if(a===c && a < b){
    	alert ("Max Value"+" " + b)
	} else if(b===c && a < b){
        alert("Max Value"+" " + b)
    	}else if(a===c && a > b){
    	alert("Max Value"+" " + a)
    	}else{ 
    	alert ("no")
	}