// Array
var animal = ['dog', 'cat', 'ret'];
// animal.push(10); [X] type not string.
// animal.push(true); [X] type not string.
animal.push('eleven'); // [/] type is match.
var mixed = [8, 'text', true];
mixed.push(2); // [/] type is match.
mixed.push('test'); // [/] type is match.
mixed[0] = 3; // [/] type is match.
// Objects
var profile = {
    name: 'name is ...',
    age: 0,
    isMan: false
};
profile.name = 'game'; // [/] type is match.
// profile.age = '26'; // [X] type not number.
profile.age = 26; // [/] type is match.
profile.isMan = true; // [/] type is match.
// profile.skills = ['play game', 'play football']; // [X] skills not have in profile
// profile = {
//   name: 'game',
// }
// [X] type of objects profile not match.
profile = {
    name: 'kaning',
    age: 16,
    isMan: false
};
// [/] type of objects profile is match.
