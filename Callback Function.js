// function sagor(){
//     console.log("Assalami Alikum");
    
// }

// function rafi(num1,num2, callback){
//     console.log(num1 + num2);
//     callback();
// }

// rafi(5,6, sagor); 

const numbers = [1,2,3,4,5];
function double(num){
    return num.map(num=>num*2);
}

function processData(numbers,callback){
    return callback(numbers);
}

console.log(processData(numbers,double));
