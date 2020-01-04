const { familyA, familyB, familyC } = require("../families");

describe("Check that internal ranges for each family created an array of their time ranges for iterating", () => {
  test("Expect Family A to have an array of objects, each containing the string formatted range of rates, pay rate as an integer, and the start and end time of the rates in the internalized format", () =>{
    expect(familyA.rates).toEqual(
      [
        {
          "range": "5pm-11pm",
          "rate": 15,
          "startHour": 17,
          "endHour": 23
        },
        {
          "range": "11pm-4am",
          "rate": 20,
          "startHour": 23,
          "endHour": 28
        }
      ]
    )
  });

  test("Expect Family B to have an array of objects, each containing the string formatted range of rates, pay rate as an integer, and the start and end time of the rates in the internalized format", () =>{
    expect(familyB.rates).toEqual(
      [
        {
          "range": "5pm-10pm",
          "rate": 12,
          "startHour": 17,
          "endHour": 22
        },
        {
          "range": "10pm-12am",
          "rate": 8,
          "startHour": 22,
          "endHour": 24
        },
        {
          "range": "12am-4am",
          "rate": 16,
          "startHour": 24,
          "endHour": 28
        }
      ]
    )
  });

  test("Expect Family C to have an array of objects, each containing the string formatted range of rates, pay rate as an integer, and the start and end time of the rates in the internalized format", () =>{
    expect(familyC.rates).toEqual(
      [
        {
          "range": "5pm-9pm",
          "rate": 21,
          "startHour": 17,
          "endHour": 21
        },
        {
          "range": "9pm-4am",
          "rate": 15,
          "startHour": 21,
          "endHour": 28
        }
      ]
    )
  });
});