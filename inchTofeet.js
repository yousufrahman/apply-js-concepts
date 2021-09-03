// var myInches = 132;
// var feet = myInches / 12;
// console.log (feet);

// var dadiInches = 144;
// var feet = dadiInches / 12;
// console.log(feet);

// var naniInches = 156;
// var feet = naniInches / 12;



// function 
function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log('My inches is very esencial', feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log('dadi inches is feet', feet);

var naniInches = 156;
var feet = inchToFeet(naniInches);
console.log('Nani Inches is feet', feet)


// mile to km 
function mileToKilometer(miles) {
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKilometer(5);
console.log('marathon in km', marathon);