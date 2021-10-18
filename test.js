// const age = { age: 26 };

// product
// {
//   name: "game",
// isMan = true;
// };

// const obj1 = {
//   name: "game",
// };

// // const obj2 = obj1;
// const obj2 = {
//   name: "game",
//   // isThai,
// };

// let obj3 = obj2;

// obj3.name = "gg";

// obj3.isThai = true;

// let obj4 = obj1;

// obj3 = {
//   ...age,
// };
// obj2.isMan = true;

// console.log(obj2);

const obj1 = {
  first: "game",
  last: "nopp",
  isThai: false,
  home: {
    road: "silom",
    city: "bangkok",
    country: {
      region: "asian",
    },
  },
};

// const obj2 = obj1;
// obj1.first = "p";

const obj2 = {
  ...obj1,
  isThai: true,
  home: {
    ...obj1.home,
    country: { ...obj1.home.country },
  },
};

// const obj2 = {
//   ...obj1,
//   isThai: true,
// };

obj1.first = "p";

obj1.home.road = "xxxx";

// const obj2 = Object.assign({}, obj1, { isThai: true });

// console.log("obj1 >>>>", obj1);
// console.log("obj2 >>>>", obj2);

const arr0 = [{ name: "oak" }, { name: "win" }, { name: "game" }];

const arr3 = arr0.filter((x) => {
  return [];
});

console.log("arr3 >>>", arr3);

const arr1 = arr0.map((x) => {
  const newName = x.name + "xxx";

  const data = {
    name: newName,
    company: "cmd",
  };
  // return 123;
  if (x.name === "win") {
    return 555;
  }
  return 123;
});

// [123, 555, 123]

let arr2 = [];

arr0.forEach((x) => {
  const newName = x.name + "xxx";
  const company = "cmd";

  const data = {
    name: newName,
    company,
  };

  if (x.name === "win") {
    arr2.push("xxx");
    arr2.push("yyy");
    return;
  }

  arr2.push("zzz");

  // arr2.push("xxx");
  // arr2.push(data);
});

// ['zzz' ,'xxx', 'yyy', 'zzz']

// console.log("arr0 >>>>", arr0);
// console.log("arr1 >>>>", arr1);
// console.log("arr2 >>>>", arr2);
