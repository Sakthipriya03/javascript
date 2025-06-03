var income = parseInt(prompt("Enter the income: "));
if(income<150000)
{
    document.writeln("No tax");
    document.writeln("The salary is " +income);
}
else if(income>150000 && income<=250000)
{
    document.writeln("10% Tax");
    let salary = income - (income*0.10);
    document.writeln("The salary after income tax is  " +salary);
}
else if( income>251000 && income<=350000)
{
    document.writeln("20% tax");
    let salary = income - (income*0.10);
    document.writeln("The salary after income tax is  " +salary);
}
else if(income>500000)
{
    document.writeln("30% tax");
    let salary = income - (income*0.10);
    document.writeln("The salary after income tax is  " +salary);
}
