let numbers = [1, 2, 3, 4, 5];

// console.log(numbers);

let maximum = Math.max(...numbers);

console.log(maximum);

let object1 = { name: "Yinusa Oladapo", department: "Computer Science" };

let object2 = { skillSet: "javascript, tailwind, react, nodeJS" };

let merge = { ...object1, ...object2 };

console.log(merge);
