import sortArr from "../app.js";

test("order", () => {
  let testArr = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
];
  const expected = [
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
      {name: 'мечник', health: 10},
    ];
  const recevied = sortArr(testArr);
  expect(recevied).toEqual(expected);
});