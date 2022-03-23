//Bài 1:
// let person = {
//     name: 'Bob',
//     occupation: 'web developer',
//     hobbies: 'painting',
// };
// console.log(person.name);
// console.log(person["occupation"]);

// let prop = "name";
// console.log(person[prop]);

// let {name, occupation, hobbies} = person;
// console.log(name, occupation, hobbies);

//Bài 2:
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// };

// let prop = Object.keys(obj);
// let result = prop.map(ele => ele.toUpperCase());
// console.log(result);

//Bài 3:
let obj = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
};

//Cách 1:
console.log(obj.bar[3].xyz = 606);

//Cách 2:
let obj2 = Object.assign(obj, {...obj, bar: ["example", "mem", null, { xyz: 606 }, 88]});
console.log(obj2);


