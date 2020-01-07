// takes a time in string with pm or am and converts it for internal purposes
// the internal value will be in military time with the minutes as decimals, 
// based on the instructions, this function always expects the time to be a string ending as am or pm (without periods, lowercase or capitalized)
function convertToInternalTime(time) {
  time = sanitizeTime(time);
  const meridiem = time.slice(-2); // the last two characters of the string
  const splitValues = time.split(":"); // split the hours and minutes up
  let hours = parseFloat(splitValues[0]); // store the hours as float
  let minutes = 0; // minutes are zero by default in case the user enters 4pm instead of 4:00pm
  if (splitValues[1])
    minutes = parseFloat(splitValues[1]) / 60; // store the minutes as a float
  if (meridiem === "pm" && hours !== 12)
    hours += 12;
  // change midnight to be 24
  else if (meridiem === "am" && hours === 12)
    hours += 12;
  // since am time is later than the evening of the previous night, add 24 hours to it for later comparisons
  if (hours < 12)
    hours += 24;
  return hours + minutes;
}

function sanitizeTime(time) {
  // if time is in the a.m. format, remove the periods
  if (time.includes(".")) {
    time = time.split(".").join(""); // split on periods and rejoin with nothing between
  }
  // replace a space
  if (time.includes(" "))
    time = time.replace(" ", "");
  return time.toLowerCase();
}

module.exports = {
  convertToInternalTime,
  sanitizeTime
};