function getTriangleArea(a, h) {
    return (a > 0 && h > 0) ? (a * h) / 2 : "nieprawidłowe dane";
}

var triangle1Area = getTriangleArea(10, 15);
console.log("pole trójkąta wynosi: " + triangle1Area);

var triangle2Area = getTriangleArea(20, 30);
console.log("pole trójkąta wynosi: " + triangle2Area);

var triangle3Area = getTriangleArea(-10, 15);
console.log("pole trójkąta wynosi: " + triangle3Area);