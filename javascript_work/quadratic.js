var a = 1;
var b = -3;
var c = 2;

// Calculate the discriminant
var discriminant = b * b - 4 * a * c;
if (discriminant > 0) {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log("Roots are real and different:", root1, root2);
} else if (discriminant === 0) {
    let root = -b / (2 * a);
    console.log("Roots are real and equal:", root);
} else {
    let realPart = -b / (2 * a);
    let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
    console.log(`Roots are complex: ${realPart} + ${imaginaryPart}i, ${realPart} - ${imaginaryPart}i`);
}