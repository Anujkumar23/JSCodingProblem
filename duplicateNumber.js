//  program to find the duplicate number from an array 
// we first create a function name duplicateNumber which contaion a parameter 
// we create ana empty array to store the duplicate no.
// after we itrate a for loop over num parameter
// it will start from 0 index and itrate upto the last index
// now we give a condition that if current element  of current index is equal to element of next index then  empty array contain current index element when the itration reach the last index we return the array that contain the duplicate number
// after that we call the function which takes an argument "arr"
  

let arr = [1,2,2,4,5]
 function duplicateNumber(num){
     for(let i=0;i<num.length;i++){
        for(let j=0;j<num.length;j++){
            if (num[i]==num[j]){
                return num[j]
            }

        }
     }
 }
 console.log(duplicateNumber(arr));
 
   