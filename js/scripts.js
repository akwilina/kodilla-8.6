function getTriangleArea(a, h) {
    if (a > 0 && h > 0 ) {
        return (a * h) / 2;
    }

    else {
        return "nieprawidłowe dane";
    }
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
console.log("pole trójkąta wynosi: " + triangle1Area);

var triangle2Area = getTriangleArea(20, 30);
console.log("pole trójkąta wynosi: " + triangle2Area);

var triangle3Area = getTriangleArea(-10, 15);
console.log("pole trójkąta wynosi: " + triangle3Area);