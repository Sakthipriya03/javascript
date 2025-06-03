var choice = parseFloat(prompt("Enter your choice(1,2,3): "));
var area;

switch (choice) {
    case 1:
        document.writeln("Area of circle");
        let radius = parseFloat(prompt("Enter the radius: "));
        area = Math.PI * radius * radius;
        document.writeln("Area of the Circle: " +area.toFixed(2));
        break;

    case 2:
        document.writeln("Area of rectangle");
        let length = parseFloat(prompt("Enter the length:"));
        let width = parseFloat(prompt("Enter the width:"));
        area = length * width;
        document.writeln("Area of the Rectangle: " +area);
        break;

    case 3:
        document.writeln("Area of cone");
        let r = parseFloat(prompt("Enter the radius: "));
        let l = parseFloat(prompt("Enter the height: ")); 
        area = Math.PI * r * (r + l);
        document.writeln("Surface Area of the Cone: " +area.toFixed(2));
        break;

    default:
        document.writeln("Invalid choice");
}