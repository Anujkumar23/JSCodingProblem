function multipleOfNum(num,length){
    let arr=[];
    for(i=1;i<=length;i++){
        arr.push(num*i)
    }
      return arr;
}

console.log(multipleOfNum(5,5));