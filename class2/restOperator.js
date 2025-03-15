//function useing rest operator to sum
function sum(...numbers){
    return numbers.reduce((total,num)=> total+num,0)
}
const num1= [1,2,3,4,5]
const num2=[5,6,7]

console.log(sum(...num1,...num2));

//function useing rest operator to multiplication

function multiple(...numbers){
    return numbers.reduce((total,num)=>total*num,1)
}
const num3= [1,2,3,4,5]
const num4=[5,6,7]

console.log(multiple(...num3,...num4));