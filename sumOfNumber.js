/*1.In this program first we declare  a variable  which contain  some element
  2.Then we declare a function name sumOfNumber which takes a parameter also
  3.Then we declare a  variable sum to store the result. at staring the value is 0
  4.Now we use for loop to itrate over each element of arr and add current index value to the sum variable
  5.Then return sum call the function and pass argument iside the funtion and print the result   */
       let  arr= [1,2,3,4,5]
        function sumOfNumber(arr){
            sum=0;
            for (let i=0;i<arr.length;i++){
                sum= sum+arr[i]
            }
            return sum;
            
            

        }
       sumOfNumber(arr);
   
        console.log(sum)