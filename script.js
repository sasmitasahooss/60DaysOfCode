// Day-1
//                                   🧩 1. Closures

// Basic:
// 1️⃣ Write a function counter() that returns another function to increment and log the count.
// function outer(){
//     let count = 0;
//    return function inner(){
//         count++;
//         console.log(count)
//     }
// }
// let counter = outer();
// counter();
// counter();

// Intermediate:
// 2️⃣ Create a function greet(name) that remembers the name and returns another function that logs a personalized message.
// function greet (name){
//     return function(){
//         console.log(`Hi ${name}`)
//     }
// }
// let msg = greet("sasmita");
// msg();

// Advanced:
// 3️⃣ Write a closure-based function bankAccount() that has private balance and methods: deposit(amount), withdraw(amount), getBalance().
    // function bankAccount(initialbalance){
    //     let balance=initialbalance;
    //     return {
    //         deposit(amount) {
    //         balance += amount ;
    //         console.log(balance);
    //         },
    //         withdraw (amount){
    //         balance = balance-amount ;
    //         console.log(balance)
    //         },
    //     getBalance (){
    //         console.log(balance);
    //         return balance
    //     }
    // }
    // }
    // let bank = bankAccount(1000);
    // bank.deposit(500);
    // bank.withdraw(200);
    // bank.getBalance();

//     1️⃣ Create a function createCounter() that returns a function to increment and log a private count.
    // function createCounter(){
    //     let a=0;
    //     return function(){
    //         a++;
    //         console.log(a);
    //     }
    // }

    // let newfnc = createCounter();
    // newfnc()

// 3️⃣ Create a function multiplyBy(n) that returns a new function multiplying any number by n.
    // function multiplyBy(n){
    //     return function(number){
    //      result = number *n ;
    //      console.log(result)
    //     }
    // }
    // let double = multiplyBy (2);
    // double(5);

// Write a function makeAdder(x) that returns a new function which adds x to its argument.

// function makeAdder(x){
//     return function(val){
//         val+=x;
//         console.log(val)
//     }
// }
// let result = makeAdder(5);
// result(7);

// 5️⃣ Create a function createIDGenerator() that returns a function generating unique IDs each time it’s called.

// function createIDGenerator(params) {
//     let id=0;
//     return function(){
//         id++;
//         console.log(id)
//     }
// }
// let generateID = createIDGenerator();
// generateID();
// generateID();

//                                         forEach()

// Basic:
// 1️⃣ Use forEach to print all elements of an array.
// let arr = [1,2,3,4,5,6,7,8,9,0]
// arr.forEach(function(val){
//     console.log(val)
// })   

// Intermediate:
// 2️⃣ Given an array of numbers, use forEach to create a new array of their squares.
// let arr = [1,2,3,4,5]
// let newarr = [];
// arr.forEach(function(val){
//          newarr.push( val*val);
// })
// console.log(newarr)

// Advanced:
// 3️⃣ Use forEach on an array of objects (students with name and marks) to print “Pass” or “Fail” for each (pass if marks ≥ 40).
// let students = [{name:"a", mark:45},
//     {name:"b", mark:46},
//     {name:"c", mark:48},
//     {name:"d", mark:34},
//     {name:"e", mark:70}
// ]
// students.forEach(function(student){
//     if(student.mark>40){
//         console.log("pass");
//     }
//     else{
//         console.log("fail")
//     }
// })

//                                     🗺️ 3. map()

// Basic:
// 1️⃣ Use map to double all numbers in an array.
// let arr = [1,2,3,4,5]
// let newarr = arr.map((val)=>{
//     return val*2;
// })
// console.log(newarr)

// Intermediate:
// 2️⃣ Given an array of objects {name, age}, return a new array of names only.
//     let arr = [{name:"a", age:10},
//         {name:"d", age:30},
//         {name:"b", age:20},
//         {name:"c", age:40},
//     ]
// let newarr = arr.map((val)=>{
//     return val.name;
// })

// console.log(newarr)

// Advanced:
// 3️⃣ Given an array of prices [100,200,300], return prices after adding 18% GST using map.
// let prices = [100,200,300];
// let newPrices = prices.map((val)=>{
//     return val+= (18/100 *val)
// })
// console.log(newPrices)

//                                     🧮 4. reduce()

// Basic:
// 1️⃣ Use reduce to find the sum of an array [1,2,3,4,5].
    // let arr = [1,2,3,4,5];
    // let newarr = arr.reduce((accumulator, val)=>{
    //     return accumulator+val

    // },0)
    // console.log(newarr)

// Intermediate:
// 2️⃣ Find the maximum value in an array using reduce.
    // let arr1 = [5,8,3,4,0]
    // let newarr1 = arr1.reduce((acc,val)=>{
    //     return acc>val ?acc : val ;
    // })
    // console.log(newarr1)
// Advanced:
// 3️⃣ Given an array of objects {product, price}, use reduce to calculate the total price.
    // let arr2 = [{product: "a", price: 10},
    //     {product: "b", price: 10},
    //     {product: "c", price: 10},
    //     {product: "d", price: 10}
    // ]
    // let newarr2 = arr2.reduce((acc,val)=>{
    //     return acc+val.price 
    // },0);
    // console.log(newarr2)
//                                 🔎 5. filter()

// Basic:
// 1️⃣ Use filter to get even numbers from [1,2,3,4,5,6].
    // let arr = [1,2,3,4,5,6];
    // let evenArr = arr.filter((val)=>{
    //     return val%2 ==0;
    // })
    // console.log(evenArr)
// Intermediate:
// 2️⃣ From an array of students {name, marks}, filter students with marks > 60.
//  let students = [{name:"a", mark:45},
//     {name:"b", mark:66},
//     {name:"c", mark:48},
//     {name:"d", mark:34},
//     {name:"e", mark:70}
// ]
// let pass = students.filter((val)=>{
//     return val.mark >60
// })
// console.log(pass)
// Advanced:
// 3️⃣ From an array of users, filter only those who are active (isActive:true) and above age 25.

                        // 🌈 6. Rest Operator (...)
// Basic:
// 1️⃣ Write a function that takes any number of arguments and logs them as an array.
    // function abcd(...arr){
    //     console.log(arr);
    // }
    // abcd(1,2,3,4,5);

// Intermediate:
// 2️⃣ Write a function sumAll(...nums) that returns the sum of all arguments.
//     function sumAll(...nums){
//        let sum =0;
//        nums.forEach((val)=>{
//         sum = sum +val
//        })
//        return sum;
//     }
//    console.log(sumAll(1,2,3,4,5));
// Advanced:
// Create a function average(...nums) that returns the average of all numbers passed.
    // let average = (...nums)=>{
    //    let sum = nums.reduce((acc,val)=> {return acc+val},0);
    //    return sum/nums.length;
    // }
    // console.log(average (4,4,4))

// Write a function combineStrings(...words) that joins all given strings with a space and returns the sentence.
    // let combineStrings =(...words)=>{
    //         return words.join(" ");
    //     }
    //     console.log(combineStrings("My", "name", "is","Sasmita", "Sahoo"));
    
// Create a function countBooleans(...values) that returns how many boolean values (true/false) are passed.
        // let countBooleans = (...values) => 
        //           values.filter(val => typeof val === "boolean").length;
        // console.log(countBooleans(true, false, 1, "hello", true, 0, false));

// Write a function sumPositive(...nums) that sums only the positive numbers from the arguments.
    // let sumPositive=(...nums)=>{
    //     let sum =0;
    //     nums
    //     .filter((val)=>val>0 )
    //     .forEach((num)=>{sum= sum+num })
    //         return sum;
    // }
    //   console.log(sumPositive(1,2,3,4,5, -5,-8))

// Make a function minMax(...nums) that returns both the minimum and maximum numbers in an array (as an object).
//     let minMax = (...nums) => {
//   return {
//     min: Math.min(...nums),
//     max: Math.max(...nums)
//   };
// };
//     console.log(minMax(2, 5, 1, 9, 3)); 

// let excludeFirstArg = (first, ...rest) => {
//   return rest;
// };

// console.log(excludeFirstArg(10, 20, 30, 40)); 

// Create a function calculate(operation, ...nums) that performs add, subtract, multiply, or divide depending on the operation passed.
//     let calculate = (operation, ...nums) => {
//   switch (operation) {
//     case "add":
//       return nums.reduce((a, b) => a + b, 0);
//     case "subtract":
//       return nums.reduce((a, b) => a - b);
//     case "multiply":
//       return nums.reduce((a, b) => a * b, 1);
//     case "divide":
//       return nums.reduce((a, b) => a / b);
//     default:
//       return "Invalid operation";
//   }
// };

// console.log(calculate("add", 2, 3, 4));       
// console.log(calculate("subtract", 10, 3, 2));   
// console.log(calculate("multiply", 2, 3, 4));    
// console.log(calculate("divide", 20, 2, 2));   

//                       ☁️ 7. Spread Operator (...)
// Basic:
// 1️⃣ Copy an array using the spread operator.
    // let arr4 = [1,2,3,4,5];
    // console.log(arr4)
    // let arr5 = [...arr4]
    // console.log(arr5)
    // console.log(arr5.pop()) ;

// Intermediate:
// 2️⃣ Merge two arrays [1,2,3] and [4,5,6] using spread.
//     let arr1 = [1, 2, 3];
//     let arr2 = [4, 5, 6];
//     let merged = [...arr1, ...arr2];

// console.log(merged); 

// Advanced:
// 3️⃣ Clone an object and update one property using spread syntax.

                                    //Day-2

                                    // Closure:
// Create a function counter() that returns another function to increase and show the count each time it’s called.
//    function counter(){
//     let count =0;
//     return function(){
//         count++;
//         console.log(count)
//     }
//    }
//    let abcd = counter();
//    abcd();
// Write a function createMultiplier(x) that returns a new function to multiply any number by x.
    // function createMultiplier(x){
    //     return function(num){
    //         console.log(num*x)
    //     }
    // }
    // let result = createMultiplier(3);
    // result(5);
// forEach:
// Write a function logSquares(arr) that prints the square of each number in an array using forEach.

// map:
// Create a function addPrefix(arr, prefix) that adds a given prefix to each string in an array using map.
// Example: addPrefix(["cat", "dog"], "super") → ["supercat", "superdog"]
//     let addPrefix = (arr, prefix) => {
//   return arr.map(item => prefix + item);
// };

// console.log(addPrefix(["cat", "dog"], "super"));

// filter:
// Write a function getLongWords(words) that returns only words with more than 4 letters.
    let getLongWords = (words) => {
  return words.filter(word => word.length > 4);
};

console.log(getLongWords(["sun", "earth", "moon", "galaxy", "sky"]));
// reduce:
// Build a function sumEven(nums) that uses reduce to sum only the even numbers.
    let sumEven = (nums) => {
  return nums.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
};

console.log(sumEven([1, 2, 3, 4, 5, 6]));

// map + filter combo:
// Given an array of numbers, first filter out odd numbers, then return their squares using map.
    let sd =(arr)=>{
      return  arr.filter((val)=>val%2===1).map((val)=>val*val)
    }
    console.log(sd([1,2,3,4,5]))
// spread:
// Write a function combineArrays(...arrays) that merges multiple arrays into one using spread.
    let combineArrays=(...arrays)=>{
        return [].concat(...arrays);
    }
    console.log(combineArrays([1,2],[3,4]));
// rest:
// Create a function average(...nums) that calculates the average of any number of arguments.
    let average=(...nums)=>{
        let sum = nums.reduce((acc,val)=>{return acc+val},0);
        console.log(sum)
        return sum/nums.length;
    }
    console.log(average(1,2,3,4,5));
// mix all concepts:
// Write a function processNumbers(...nums) that:
// Filters positive numbers
// Squares them (map)
// Returns the sum using reduce
    let processNumbers=(...nums)=>{
        let positive = nums.filter((num)=>num>0);
        console.log(positive);
        let squares = nums.map((num)=>{return num*num});
        console.log(squares)
        return nums.reduce((acc,val)=> acc+val,0)
    }
    console.log(processNumbers(1,2,3,4,5));