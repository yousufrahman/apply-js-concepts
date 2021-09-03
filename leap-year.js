function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const myYear = 2087;
const myYearLeapYear = isLeapYear(myYear);
console.log('Is my year leap year', myYearLeapYear);

const yourYear = 2100;
const isYourLeapYear = isLeapYear(yourYear);
console.log('is your year leap year', isYourLeapYear);