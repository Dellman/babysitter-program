const Babysitter = require("../babysitter");
const { familyA, familyB, familyC } = require("../families");

let babysitter = new Babysitter();

describe("Check if hours are appropriate working hours (no earlier than 5pm and no later than 4am)", () => {
  test("Starting at 5pm and ending at 4am returns true", () => {
    expect(babysitter.isWorkingHours("5pm","4am")).toBe(true);
  });

  test("Starting at 12am and ending at 4am returns true", () => {
    expect(babysitter.isWorkingHours("12am","4am")).toBe(true);
  });

  test("Starting at 6:30pm and ending at 9pm returns true", () => {
    expect(babysitter.isWorkingHours("60:30pm","9pm")).toBe(true);
  });

  test("Starting at 4:40pm and ending at 4am returns false", () => {
    expect(babysitter.isWorkingHours("4:40pm","4am")).toBe(false);
  });

  test("Starting at 5:40pm and ending at 4:02am returns false", () => {
    expect(babysitter.isWorkingHours("5:40pm","4:02am")).toBe(false);
  });
 
});

describe("Check if starting hours are before ending hours", () => {
  test("Starting at 5pm and ending at 4am returns true", () => {
    expect(babysitter.startsBeforeFinishes("5pm","4am")).toBe(true);
  });

  test("Starting at 12am and ending at 3am returns true", () => {
    expect(babysitter.startsBeforeFinishes("5pm","4am")).toBe(true);
  });

  test("Starting at 1am and ending at 3am returns true", () => {
    expect(babysitter.startsBeforeFinishes("1am","3am")).toBe(true);
  });

  test("Starting at 12am and ending at 10pm returns false", () => {
    expect(babysitter.startsBeforeFinishes("12am","10pm")).toBe(false);
  });

  test("Starting at 12am and ending at 12am returns false", () => {
    expect(babysitter.startsBeforeFinishes("12am","12am")).toBe(false);
  });

  test("Starting at 8pm and ending at 6pm returns false", () => {
    expect(babysitter.startsBeforeFinishes("8pm","6pm")).toBe(false);
  });
});