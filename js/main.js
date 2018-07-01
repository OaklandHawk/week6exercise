console.log("connected")

var testOne = "What kind of variable am I?";
//string
var testTwo = 256;
//numbers
var testThree = false;
//Boolean
var testFour = "true";
//string
var testFive = "128";
//strig
var testSix = "";
//string



var testOne = "hello" + "there";
//hellothere
var testTwo = "100" + 28;
//10028
var testThree = true + 3;
//4
var testFour = "false" + 5;
//false5
var testFive = "128" - 3;
//125
var testSix = "" * 9;
//0
var testSeven = "zero" - 1;
//Nan or zer?
var testEight = "five".length; 
//4
var testNine = "five"[0] + "ever";
//fever
var testTen = "a" > "b";
//false
var testEleven = "number".length < 7;
//true
var testTwelve = "12" == 12;
//true
var testThirteen = "twelve" == 12;
//false
var testFourteen = "14" === 14;
//false
var testFifteen = "Hi there"[0] + "open sesame"[2] +"alohamora"[1] + "eulalia"[4] + "harkonnen"[4] + "BATMAN"[6];
//Helloundefined



var string1 = "Hello, ";

var string2 = "my name is ";

var string3 = "Kingsley Pappagiorgio.";

var combinedStrings = string1 + string2 + string3;

console.log (combinedStrings);
//Hello, my name is Kingsley Pappagiorgio.



var num1 = 8;

var num2 = 52;

var num3 = 60;

var combninedNumbers = num1 + num2 + num3;

console.log(combninedNumbers);
//120



var mixedNum1 = 10;

var mixedString1 = "ten";

var mixedNum2 = "10";

var mixedConcatentation = mixedNum1 + mixedNum2 + mixedString1;

console.log(mixedConcatentation)
//1010ten



var num4 = 5;

var num5 = 0;

if (num4 > 1) {

	console.log("Num4 is greater than 1");

}

else {

	console.log("Num4 is NOT greater than 1");

};
//Num4 is greater than 1



var num4 = 5;

var num5 = 0;

if (num4 < num5 || num4 === num5) {

	console.log("If statement ran!");

}

else if (num5 === "0" || true) {

	console.log("Else if statement ran");

}

else {

	console.log("Else statement ran")

}
//"Else if statement ran"



var num4 = 5;

var num5 = 0;

if (num4 > num5 && num4 === num5) {

	console.log("If statement ran!");

}

else if (num5 === "0" || true) {

	console.log("Else if statement ran");

}

else {

	console.log("Else statement ran");

}
//"Else if statement ran"