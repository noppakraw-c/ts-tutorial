// Explicit

let character: string;
let age: number;
let isLoggedIn: boolean;

character = 'game';
age = 26;
isLoggedIn = true;

// Array

let nameAnimal: string[];
nameAnimal = ['dog', 'cat'];

let pushNameAnimal: string[] = [];
pushNameAnimal.push('fox');

// Union types

let mixed: (string|number)[] = [];
mixed.push('text');
mixed.push(12);

let uid: string|number;
uid = '12345';
uid = 123;

// Objects

let profileOne: object;
profileOne = { name: 'game', age: 26 };

let profileTwo: {
  name: string,
  age: number,
  isMan: boolean,
}
profileTwo = {
  name: 'game',
  age: 26,
  isMan: true,
}