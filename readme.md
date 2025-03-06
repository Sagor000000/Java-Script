***Template Literals***
Rewrite the following function using template literals instead of string concatenation.


function introduce(name, age, city) {
  return "Hello, my name is " + name + ". I am " + age + " years old and I live in " + city + ".";
}

console.log(introduce("Ali", 25, "Istanbul"));

***Default Parameter***
Modify the function below so that if no name is provided, it defaults to "Guest".

function greet(name) {
  console.log(Hello, ${name}!);
}

greet(); // Expected output: "Hello, Guest!"
greet("Ali"); // Expected output: "Hello, Ali!"


***Class Creation & Static Method***
Create a class named Car with properties brand and model.
Inside the class, create a static method called compareCars(car1, car2).
The method should compare the models of two cars and return which one has a greater value.
Create two car objects and compare them using the static method.

***Callback Function***
Write a function processData(numbers, callback) that takes an array of numbers and a callback function.
The callback function should double each number in the array and return the new array.
Call processData() with an array [1, 2, 3, 4, 5] and a function double() that multiplies each number by 2.

***Loops***
#### (a) for...of Loop
Write a for...of loop to iterate over an array of numbers and print each number.

#### (b) for...in Loop
Write a for...in loop to iterate over an object and print each property and its value.

#### (c) forEach() Loop
Use the .forEach() method to iterate over an array and print each element.

***BONUS Challenge***
Modify the processData function to accept any custom transformation function instead of just doubling.
Create a function transform(num) that squares each number.
Call processData() with transform() and print the result.