// Check whether a number is prime or nor

function checkPrimeNumber(num) {
   
  for (let  i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log(`${num} is not a prime number`);
     
    } else {
      console.log(`${num} is a prime number`);
     
    }
  }
}
let Number = +prompt("Enter a number", 0);
checkPrimeNumber(Number);
