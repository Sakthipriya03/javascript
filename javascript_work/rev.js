var num = parseInt(prompt("Enter the number: "));
var org_num = num;
var rem=0, rev=0;
while (num>0) 
    {
        rem = num % 10;
        rev = rev* 10 + rem;
        num = Math.floor(num/10);
    }
document.write("The revered number is " +rev);