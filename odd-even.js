// const taka = 4;
// const remainder = taka % 2;
// console.log(remainder == 0);
// console.log(number % 2 == 0);

const number = 145;
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
console.log('this is my number', isMyNumberEven)

const herNumber = 1892;
const isHerNumberEven = isEven(herNumber);
console.log('is her number even', isHerNumberEven)

// is odd function 
function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}

const isMyNumberOdd = isOdd(myNumber);
console.log('is my number odd', isMyNumberOdd);
