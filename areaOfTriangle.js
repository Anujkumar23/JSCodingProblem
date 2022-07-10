function areaOfTriangle(base,height){
    return (base*height)/2
}

let base= +prompt("base") ;
let height=+prompt("height"); 
let area=(areaOfTriangle(base,height));
console.log(` The area of triangle with base ${base} and height ${height} is ${area}`)