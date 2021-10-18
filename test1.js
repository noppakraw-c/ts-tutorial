console.log("===== Hi! I'm MAQE Bot. =====");
console.log("=============================");
console.log("");
console.log("The commands are as follows.");
console.log("I. R: Turn 90 degree to the right of MAQE Bot (clockwise)");
console.log("II. L: Turn 90 degree to the left of MAQE Bot (counterclockwise)");
console.log(
  "III. WN: Walk straight for N point(s) where N can be any positive integers. For example, W1 means walking straight for 1 point."
);
console.log("-----------------------------");
console.log("");
console.log("Where do you want to go?:");

const readline = require("readline");

let botPosition = {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", async (input) => {
  console.log(`Commands: ${input.toUpperCase()}`);

  const dataInput = checkIsLanguage(input);
  if (dataInput === false) {
    console.log("Input incorrect!");
    rl.close();
  }

  const position = await commands(input);
  console.log("Position Now!:", position);
  rl.close();
});

const checkIsLanguage = (str) => {
  return /\w/.test(str);
};

const commands = async (input) => {
  // const dataInput = input.toUpperCase().split("");
  const dataInput = input.toUpperCase();

  const re = /\s*(Ww)(0-9)\s*/;

  const str = dataInput.split(re);

  // const str = dataInput.replace(/([Ww])/, "");

  // const t = dataInput.replace(/([RL])/gi, "");

  // const str = dataInput.replace(/([0-9])/gi, "");
  // const w = input.toUpperCase().split(re);
  // const num = dataInput.replace(/([A-Za-z])/gi, "");
  // const number = parseInt(num);

  let x = 0;
  let y = 0;

  // console.log("t:", t);
  console.log("str:", str);
  // console.log("number:", number);
  // console.log("dataInput:", dataInput);
  // console.log("w:", w);

  // console.log("str:", str);
  // console.log("number:", number);

  // console.log("str:", str.length);

  // if (parseInt(str.length) / 1 === true) {
  //   console.log("y");
  // } else if (parseInt(str.length) / 2 === true) {
  //   console.log("x");
  // } else if (parseInt(str.length) / 3 === true) {
  //   console.log("-y");
  // } else if (parseInt(str.length) / 4 === true) {
  //   console.log("-x");
  // }

  // let positionX = "";
  // let positionY = "";

  // switch (str) {
  //   case "W":
  //     positionY = y + number;
  //     positionX = x;
  //     break;
  // }

  // x = { x: positionX };
  // y = { y: positionY };

  // botPosition = {
  //   ...x,
  //   ...y,
  // };

  // return botPosition;
};
