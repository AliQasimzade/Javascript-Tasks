const arr = [
  {
    type: "A",
    value: "Tesla",
  },
  {
    type: "A",
    value: "GMC",
  },
  {
    type: "B",
    value: "KIA",
  },
  {
    type: "C",
    value: "Dodge",
  },
  {
    type: "C",
    value: "Ford",
  },
];

let indexs = [[], [], []];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].type === "A") {
    indexs[0].push(i);
    if (indexs[0].length > 1) {
      arr[indexs[0][1]].value = [
        arr[indexs[0][0]].value,
        arr[indexs[0][1]].value,
      ];
      arr.splice(indexs[0][0], indexs[0][1]);
    }
  } else if (arr[i].type === "B") {
    indexs[1].push(i);
    if (indexs[1].length < 1) {
    }
  } else if (arr[i].type === "C") {
    indexs[2].push(i);
    if (indexs[2].length > 1) {
      arr[indexs[2][0]].value = [
        arr[indexs[2][0]].value,
        arr[indexs[2][1]].value,
      ];
      arr.splice(indexs[2][1], indexs[2][0]);
    }
  }
}

console.log(arr);
