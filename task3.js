let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

let multipleOfThree = someNumbers.some((number)=>{
    return number%3 === 0 
})
console.log(multipleOfThree)

let multipleOfFive = someNumbers.some((number)=>{
    return number%5 === 0 
})
console.log(multipleOfFive)

let multipleOfSixty = someNumbers.some((number)=>{
    return number%60 === 0 
})
console.log(multipleOfSixty)

let multipleOfNinety = someNumbers.some((number)=>{
    return number%90 === 0 
})
console.log(multipleOfNinety)