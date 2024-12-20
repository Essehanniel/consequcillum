const B = [1, 2, 3];

switch (B.length) {
    case 0:
        console.log("Array B is empty.");
        break;
    case 1:
        console.log("Array B has one element.");
        break;
    case 2:
        console.log("Array B has two elements.");
        break;
    default:
        console.log(`Array B has ${B.length} elements.`);
}
