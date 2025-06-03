var n = parseInt(prompt("Enter the number of terms for fabinocci series: "));
var f1=0, f2=1;
var f3=0;
document.write(f1);
document.write(" " +f2);
for(let i=1; i<=n;i++)
{
    f3=f1+f2
    document.write(" "+f3);
    f1=f2;
    f2=f3;
}