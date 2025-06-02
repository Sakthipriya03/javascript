var a = 10;
var b = 20;
var temp;
temp=a;
a=b; 
b=temp
document.writeln("After swapping value of a " +a);
document.writeln("After swapping value of b " +b);
//without temp
a=10;
b=20;
a=a+b;
b=a-b;
a=a-b;
document.writeln("without using temp variable");
document.writeln("The values are " +a,+b);

