//  Program to find the duplicate number from an array
// 1.We first create a function name duplicateNumber which contaion a parameter
//2. We create an empty array to store the duplicate no.
//3. After we itrate a for loop over num parameter
//4. Now first we need to compare element at index i with all other element present in array .For that we need to create an other for loop it would also start from j=0 now we will apply if condition on index i and j that if i!==j and element of i is strictly equal to element of j and our result array does not include that element already that push the element in our result array.
// after that we will return the result array and call the function by passsing the argument.
let arr = [1, 2, 3, 3, 4,5,5,6,7,7];

function duplicateNumber(num) {
  let duplicateValues = [];

  
  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (i !== j) {
        if (num[i] === num[j]) {
          if(!duplicateValues.includes(num[i])){

            duplicateValues.push(num[i]);
          }
        
        }
      }
    }
  }
  return duplicateValues;
}
console.log(duplicateNumber(arr));
