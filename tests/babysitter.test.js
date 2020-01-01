const Babysitter = require("../babysitter");

let babysitter = new Babysitter;

describe("Check if hours are appropriate working hours", () => {
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