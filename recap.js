var time = '10:15';
var bookPrice = 150;
var isWhiteColor = false;

// array 
var partners = ['sajid', 'mojid', 'nojid', 'lajit'];
var elementCount = partners.length;
var nojidIndex = partners.indexOf('nojid');
partners.push('kajit');
partners.pop();


// conditionals 

if (bookPrice < 120) {
    console.log('I will buy this book');
}
else {
    console.log('Mama, kichu discount den na ,apni na mama!');
}

//loop

var i = 0;
while (i <= 17) {
    //do some work
    i++;
}

for (var i = 0; i <= 17; i++) {

}

// function 

function isMoonUp(time) {
    if (time >= 19 && time <= 5) {
        return true;
    }
    return true;
}

var moonStatus = isMoonUp(21);
console.log(moonStatus);


// let const 

// value of variable could change 

let price = 27;
price = 29;
price = 31;

// value of the variable will not change 

const name = 'lal e lal mr. Helal';
console.log(name);
