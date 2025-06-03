var num = parseInt(prompt("Enter the number: "));
var count = 0;
for(let i=2; i<Math.sqrt(num); i++)
{
    if(num%i==0)
    {
        count=count+1;
        break;
    }
       

}
if(count=1)
{
    document.writeln("The number is prime number");
}
else
{
    document.writeln("The number is not a prime number");
}