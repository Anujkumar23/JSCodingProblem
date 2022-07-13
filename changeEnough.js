function changeEnough(change,due){
let quarter=change[0]*0.25
let dime=change[1]*0.1
let nickel=change[2]*0.05
let penny=change[3]*0.01
if(quarter+dime+nickel+penny>=due){
    return true;
}
else{
    return false;
}
}
console.log(changeEnough([25,20,5,0],4.25));
console.log(changeEnough([2,100,0,0],14.11))