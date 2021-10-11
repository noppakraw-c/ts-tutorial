let ageAny: any = 24;

ageAny = true;
ageAny = '24';

ageAny = {
  age: 24,
};

let mixedAny: any[] = [];

mixedAny.push('text');
mixedAny.push(24);
mixedAny.push(true);

// let profileAny = { name: any, age: any } // [X] objects error.

let profileAny: { name: any, age: any }; // [/] objects any.

profileAny = { name: 24, age: 'game' };
profileAny = { name: 'game', age: 24 };