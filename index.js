//making an object
let person = {
    name: 'Richard',
    age: 30
};
console.log(person);

//access an object value
person.name = 'John';
console.log(person.name);

//access an object using bracket
let selection = 'name';
person[selection] = 'Mary';
console.log(person[selection]);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 1;
console.log(selectedColors);

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Richard', 'Trisnosaputra');

function square(number) {
    return number * number;
}

console.log(square(2));