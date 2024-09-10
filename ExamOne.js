// This is Code Exam One : Fibonacci Challenge

// this is operations execute 



const prompt = require("prompt-sync")({ sigint: true }); // function locale get value from user

const Fibonacci = [0,1];  // create array is defult value tow element 0,1

let elementBeforLastInArrary; // get value element from array befor last

let elementLastInArray; // get value element from array last

let newItem; // variable for new value that will insert to array

let isInsert = false; // variable for validation is insert to array add new element


// pritn arrary
console.log('\nThe Array Defult Element : ' , Fibonacci);


while(true){

    
    
    let question = prompt("\nDid You Insert New Element In Arrary ? (yes or y /no or n) :\t").toLocaleLowerCase() // get value from user to accept insert new element
    
    // valedateion value insert data
    
    if(question == "yes" || question == "y"){
 
        elementBeforLastInArrary = Fibonacci[Fibonacci.length - 2]; // get item befor last array 
 
        elementLastInArray =Fibonacci[Fibonacci.length - 1]; // get item last array 
 
        isInsert = true;
        // user want insert data , must be var isInsert value equal true 
        if(isInsert){
            // call function locale operation add new element to array 
            addWithAddtionLastedTowItem();
            
        }
    }
    else if(question == "no" || question =="n"){

        console.log('\nThe Array Element : ' , Fibonacci);
        
        console.log('\nGood By');
        break;
    }
    else{
        continue;
    }
}

// methods operation locale with addtional items 

function addWithAddtionLastedTowItem(){
    
    // addtional operation to last tow item in new value that will insert to arrary . 
    newItem = elementBeforLastInArrary + elementLastInArray;
    
    // add new item in array
    Fibonacci.push(newItem);
       
    // print array elemnt
    
    console.log('\nSuccess Added New Element In Array =>\t ',Fibonacci);
        
}