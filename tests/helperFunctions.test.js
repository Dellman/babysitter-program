const { convertToInternalTime, sanitizeTime } = require("../helperFunctions");

describe("Get the input time returned as internalized time.", () => {
  test("5pm to be converted to 17", () => {
    expect(convertToInternalTime("5pm")).toBe(17);
  });
  
  test("7:30pm to be converted to 19.5", () => {
    expect(convertToInternalTime("7:30pm")).toBe(19.5);
  });
  
  test("1:00am to convert to 25", () => {
    expect(convertToInternalTime("1:00am")).toBe(25);
  });

  test("12:00am to be converted to 24", () => {
    expect(convertToInternalTime("12:00am")).toBe(24);
  });

  test("12:00pm to stay as 12", () => {
    expect(convertToInternalTime("12:00pm")).toBe(12);
  });
});

describe("Sanitize time and remove spaces, periods, and lowercase the meridiems", () => {
  test("5:00 pm to be converted to 5:00pm", () => {
    expect(sanitizeTime("5:00 pm")).toBe("5:00pm");
  });

  test("5:00P.M. to be converted to 5:00pm", () => {
    expect(sanitizeTime("5:00P.M.")).toBe("5:00pm");
  });

  test("5:00 P.M. to be converted to 5:00pm", () => {
    expect(sanitizeTime("5:00P.M.")).toBe("5:00pm");
  });
});