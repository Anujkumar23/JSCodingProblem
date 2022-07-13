function sumLessThan(num1, num2) {
  let sum = num1 + num2;
  if(sum<100){
    return true;
  }
  else{
    return false;
  }
}
let result=sumLessThan(60,40);
console.log(result);

