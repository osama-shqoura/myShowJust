// this is code Exam Tow : Missing Number Game .

const prompt = require("prompt-sync")({ sigint: true }); // call a function input value from user

const arrNumbersAvilable = []; // this array list contant number serias

const arrNumbersNotAvilable = []; // this array contant number missing

// statment print warnning to user ....

console.log('\n! i make insert data in array from user !  :\n');
console.log('\n! write (stop) in finished Added Number  :\n');


// operation added numbers of arrary from user

while(true){

    let number = prompt("- add number to array : \t").toLocaleLowerCase(); // get number from user
    // valedation is stop insert or no 
    if(number != "stop"){
        arrNumbersAvilable.push(Number(number));
    }
    else{
        console.log('\n');
        
        break;
    }

}


console.log('The Number Arrary Insert : ' + arrNumbersAvilable + '\n');

// operation sorts number from less to greath .

for(let i =0 ; i < arrNumbersAvilable.length ; i++){
    for(let j =0; j < arrNumbersAvilable.length ; j++){
        if(arrNumbersAvilable[i] < arrNumbersAvilable[j]){
            let oldNumberOne = arrNumbersAvilable[i];
            let oldNumberTow = arrNumbersAvilable[j];
            
            arrNumbersAvilable[j] = oldNumberOne;
            arrNumbersAvilable[i] = oldNumberTow;
        }
    }
}


function missingNumberInArray(){

    for(let y = 0 ; y < arrNumbersAvilable.length -1 ; y++){
        if(arrNumbersAvilable[y] + 1 != arrNumbersAvilable[y+1]){

            arrNumbersNotAvilable.push(arrNumbersAvilable[y]+1);
        }
        else{
            continue;
        }
    }
}

missingNumberInArray()

console.log('The Number Missing : '+ arrNumbersNotAvilable);