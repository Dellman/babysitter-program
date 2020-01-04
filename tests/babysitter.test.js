const Babysitter = require("../babysitter");
const { familyA, familyB, familyC } = require("../families");

let babysitter = new Babysitter();

describe("Check if hours are appropriate working hours (no earlier than 5pm and no later than 4am)", () => {
  test("Starting at 5pm and ending at 4am returns true", () => {
    expect(babysitter.isWorkingHours("5pm", "4am")).toBe(true);
  });

  test("Starting at 12am and ending at 4am returns true", () => {
    expect(babysitter.isWorkingHours("12am", "4am")).toBe(true);
  });

  test("Starting at 6:30pm and ending at 9pm returns true", () => {
    expect(babysitter.isWorkingHours("6:30pm", "9pm")).toBe(true);
  });

  test("Starting at 4:40pm and ending at 4am returns false", () => {
    expect(babysitter.isWorkingHours("4:40pm", "4am")).toBe(false);
  });

  test("Starting at 5:40pm and ending at 4:02am returns false", () => {
    expect(babysitter.isWorkingHours("5:40pm", "4:02am")).toBe(false);
  });

});

describe("Check if starting hours are before ending hours", () => {
  test("Starting at 5pm and ending at 4am returns true", () => {
    expect(babysitter.startsBeforeFinishes("5pm", "4am")).toBe(true);
  });

  test("Starting at 12am and ending at 3am returns true", () => {
    expect(babysitter.startsBeforeFinishes("5pm", "4am")).toBe(true);
  });

  test("Starting at 1am and ending at 3am returns true", () => {
    expect(babysitter.startsBeforeFinishes("1am", "3am")).toBe(true);
  });

  test("Starting at 12am and ending at 10pm returns false", () => {
    expect(babysitter.startsBeforeFinishes("12am", "10pm")).toBe(false);
  });

  test("Starting at 12am and ending at 12am returns false", () => {
    expect(babysitter.startsBeforeFinishes("12am", "12am")).toBe(false);
  });

  test("Starting at 8pm and ending at 6pm returns false", () => {
    expect(babysitter.startsBeforeFinishes("8pm", "6pm")).toBe(false);
  });
});

describe("Calculate hours that the babysitter will work given a start and end time", () => {
  test("Starting at 5pm and ending at 4am should return 11 hours worked", () => {
    expect(babysitter.calculateHoursWorked("5pm", "4am")).toBe(11);
  });

  test("Starting at 5pm and ending at 12am should return 7 hours worked", () => {
    expect(babysitter.calculateHoursWorked("5pm", "12am")).toBe(7);
  });

  test("Starting at 1am and ending at 3am should return 2 hours worked", () => {
    expect(babysitter.calculateHoursWorked("1am", "3am")).toBe(2);
  });

  test("Starting at 12am and ending at 4am should return 4 hours worked", () => {
    expect(babysitter.calculateHoursWorked("12am", "4am")).toBe(4);
  });

  test("Starting at 9pm and ending at 12am should return 3 hours worked", () => {
    expect(babysitter.calculateHoursWorked("9pm", "12am")).toBe(3);
  });
});

describe("Caculate the babysitter's nightly charge", () => {
  test("Babysitting for FamilyA starting at 5pm and ending at 4am should pay $190", () => {
    expect(babysitter.calculateNightlyCharge(familyA, "5pm", "4am")).toBe(190);
  });

  test("Babysitting for FamilyA starting at 12am and ending at 4am should pay $80", () => {
    expect(babysitter.calculateNightlyCharge(familyA, "12am", "4am")).toBe(80);
  });

  test("Babysitting for FamilyA starting at 5pm and ending at 10pm should pay $75", () => {
    expect(babysitter.calculateNightlyCharge(familyA, "5pm", "10pm")).toBe(75);
  });

  test("Babysitting for FamilyB starting at 5pm and ending at 4am should pay $140", () => {
    expect(babysitter.calculateNightlyCharge(familyB, "5pm", "4am")).toBe(140);
  });

  test("Babysitting for FamilyB starting at 10pm and ending at 4am should pay $80", () => {
    expect(babysitter.calculateNightlyCharge(familyB, "10pm", "4am")).toBe(80);
  });

  test("Babysitting for FamilyB starting at 10pm and ending at 12am should pay $16", () => {
    expect(babysitter.calculateNightlyCharge(familyB, "10pm", "12am")).toBe(16);
  });

  test("Babysitting for FamilyB starting at 12am and ending at 4am should pay $46", () => {
    expect(babysitter.calculateNightlyCharge(familyB, "12am", "4am")).toBe(64);
  });

  test("Babysitting for FamilyC starting at 5pm and ending at 4am should pay $189", () => {
    expect(babysitter.calculateNightlyCharge(familyC, "5pm", "4am")).toBe(189);
  });

  test("Babysitting for FamilyC starting at 5pm and ending at 9pm should pay $84", () => {
    expect(babysitter.calculateNightlyCharge(familyC, "5pm", "9pm")).toBe(84);
  });

  test("Babysitting for FamilyC starting at 9pm and ending at 4am should pay $105", () => {
    expect(babysitter.calculateNightlyCharge(familyC, "9pm", "4am")).toBe(105);
  });

  test("Babysitting for FamilyC starting at 3pm and ending at 4am should return false for invalid hours", () => {
    expect(babysitter.calculateNightlyCharge(familyC, "3pm", "4am")).toBe(false);
  });

  test("Babysitting for FamilyC starting at 9pm and ending at 6am should return false for invalid hours", () => {
    expect(babysitter.calculateNightlyCharge(familyC, "9pm", "6am")).toBe(false);
  });

});
