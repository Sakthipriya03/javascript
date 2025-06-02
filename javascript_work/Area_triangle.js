var side1 = parseFloat(prompt("enter the value of side1:"));
var side2 = parseFloat(prompt("enter the value of side2:"));
var side3 = parseFloat(prompt("enter the value of side3:"));
//calculating semi-perimeter
var s = (side1+side2+side3)/2;
var area;
area=Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
console.log("The area of triangle using herons formula is ", area.toFixed(2));
