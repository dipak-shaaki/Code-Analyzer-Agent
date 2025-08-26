// function outer() {
//   let count = 0;
//   function inner() {
//     count++;
//     return count;
//   }
//   return inner;
// }

// let counter = outer();  
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3


//interview question

// for (var i = 1; i <= 5; i++) { //use let for printing 1,2,3,4,5
//   setTimeout(function() {
//     console.log(i);
//   }, i*1000);
// }

// fixing this with closure
// for (var i = 1; i <= 3; i++) {
//   (function(j) { //this is an IIFE which means Immediately Invoked Function Expression
//     setTimeout(function() {
//       console.log(j);
//     }, 1000);
//   })(i);
// }


// function bankAccount(initialBalance) {
//   let balance = initialBalance;
//   return {
//     deposit(amount) { balance += amount; return balance; },
//     withdraw(amount) { balance -= amount; return balance; },
//     getBalance() { return balance; }
//   }
// }

// let account = bankAccount(1000);
// console.log(account.deposit(500));   // 1500
// console.log(account.withdraw(200));  // 1300
// console.log(account.balance);        // undefined (protected!)


//function that can only be called once
// function once(fn) {
//   let called = false;
//   let result;
//   return function(...args) {
//     if (!called) {
//       called = true;
//       result = fn(...args);
//     }
//     return result;
//   }
// }

// const greet = once(() => "Hello Dipak!");
// console.log(greet()); // "Hello Dipak!"
// console.log(greet()); // "Hello Dipak!" (function फेरि चल्दैन)

// function counter() {
//     let count = 0;
//     return {
//     increment(){
//         count++;return count; },
//     decrement(){
//         count--;
//         return count;
//     },
//     value(){
//         return count;
//     }
// }

// }

// let counter1 = counter();
// console.log(counter1.increment()); 
// console.log(counter1.increment());
// console.log(counter1.decrement());
// console.log(counter1.value());