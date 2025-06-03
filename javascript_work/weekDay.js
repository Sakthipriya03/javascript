var day = parseInt(prompt("Enter a day in number format(sun-1,mon-2,tues-3...): "));
switch(day)
{
    case 1:
        document.writeln("Sunday");
        break;
    case 2:
        document.writeln("Monday");
        break;
    case 3:
        document.writeln("Tuesday");
        break;
    case 4:
        document.writeln("Wednesday");
        break;
    case 5:
        document.writeln("Thursday");   
        break; 
    case 6:
        document.writeln("Friday");
        break;
    case 7:
        document.writeln("Saturday");
        break;
    default:
        document.writeln("Invalid input");
        break;
}