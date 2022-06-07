//  Program to find the duplicate number from an array
// We first create a function name duplicateNumber which contaion a parameter
// We create an empty array to store the duplicate no.
// After we itrate a for loop over num parameter
// Now first we need to compare element at index i with all other element o .For that we need to create an other for loop it would also start from j=0 now if we compare i=j it will give us a duplicate value but 

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
