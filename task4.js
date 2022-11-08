let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

let seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];

let check = sevenTimesTable.every((num)=>{
    return num%7 === 0
})

console.log(check)

let newCheck = seventySevenTimesTable.every((num)=>{
    return num%77 === 0
})

console.log(newCheck)