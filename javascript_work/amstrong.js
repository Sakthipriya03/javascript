var num = parseInt(prompt("Enter the number: "));
var org_num = num;
var rem=0, result=0;
while(org_num!=0)
{
    rem = org_num%10;
    result = result+ Math.pow(rem,3);
    org_num= Math.floor(org_num/10);
}
if(result==num)
{
    document.writeln("The given number is amstrong number");
}
else
{
    document.writeln("The given number is not a amstrong number");
}