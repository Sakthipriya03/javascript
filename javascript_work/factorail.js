var num = parseInt(prompt("Enter the number:"));
var fact = 1;
for ( let i=1; i<=num;i++)
{
    fact = fact * i;
}
document.writeln("The factorail of the given number: " +fact);