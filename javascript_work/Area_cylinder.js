var radius = parseFloat(prompt("Enter the radius:"));
var height = parseFloat(prompt("Enter the height: "));
const pi = 3.14;
//Lateral surface area
var lateral_Area = 2*pi*radius*height;
console.log("The lateral Surface Area of cylinder is " , lateral_Area);
//total surface area 
var Total_Area=2*pi*radius*(height+radius);
console.log("The Total Surface area of cylinder is" , Total_Area);
