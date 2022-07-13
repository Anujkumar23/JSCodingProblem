function concatArray(...n){
    let arr=[];
    return arr.concat(...n)
}
console.log(concatArray([1,2,3],[4,5],[6,7]));