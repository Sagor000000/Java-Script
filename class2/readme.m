**JavaScript Practice Questions**

### **1. Spread Operator**
- Given the array `const arr1 = [1, 2, 3]`, create a new array that includes all elements of `arr1` plus `4` and `5` using the spread operator.
- Merge two objects `{name: 'Alice'}` and `{age: 25}` into a single object.

### **2. Rest Operator**
- Write a function that takes multiple arguments using the rest operator and returns their sum.
- Modify the function below to use the rest operator instead of explicit parameters:
  ```js
  function multiply(a, b, c) {
    return a * b * c;
  }
  ```

### **3. Map Function**
- Given an array `[3, 4, 5]`, use the `map()` function to create a new array where each element is multiplied by 2.
- Transform an array of names `['alice', 'bob', 'charlie']` into uppercase using `map()`.

### **4. Filter Function**
- Given an array `[1, 2, 3, 4, 5, 6]`, use the `filter()` function to create a new array containing only even numbers.
- Write a function that filters out words from an array that have less than 4 characters.

### **5. Reduce Function**
- Use `reduce()` to find the sum of numbers in an array `[10, 20, 30, 40]`.
- Implement `reduce()` to find the maximum value in an array `[3, 7, 2, 9, 5]`.

### **6. Promise Function**
- Create a promise that resolves after 3 seconds with the message "Data fetched successfully!". Log the message once the promise resolves.
- Write a function `fetchUserData` that returns a promise. If the user ID is even, resolve with "User found"; otherwise, reject with "User not found".