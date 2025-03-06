const numbers = [1,2,3,4,5];

for (const number of numbers){
    console.log(number);
}

const person = {
    name : "Sagor",
    age : 24,
    city : "Kurigram"
}

for (const key in person){
    console.log(`${key}: ${person[key]}`); 
}

const number = [1,2,3,4,5];

number.forEach(function(number){
    console.log(number);
});