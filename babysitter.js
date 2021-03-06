const { convertToInternalTime } = require("./helperFunctions");


class Babysitter {
  constructor() {
    this.earliestStartTime = 17;
    this.latestEndTime = 28;
  }
  isWorkingHours(startTime, endTime) {
    let workingHours = false;
    // convert string times into floats for internal time
    startTime = convertToInternalTime(startTime);
    endTime = convertToInternalTime(endTime);
    if (startTime >= this.earliestStartTime && startTime < this.latestEndTime
      && endTime > this.earliestStartTime &&  endTime <= this.latestEndTime)
      workingHours = true;
    return workingHours;
  }
  startsBeforeFinishes(startTime, endTime) {
    // convert string times into floats for internal time. If the end value is larger, that means it started later
    return convertToInternalTime(startTime) < convertToInternalTime(endTime);
  }
  isOnTheHour(time){
    time = convertToInternalTime(time);
    // If a number converted to an integer is the same as the float, it is on the hour
    return parseInt(time) === time;
  }
  calculateHoursWorked(startTime, endTime) {
    startTime = convertToInternalTime(startTime);
    endTime = convertToInternalTime(endTime);
    return endTime - startTime;
  }
  calculateNightlyCharge(family, startTime, endTime) {
    let hours = this.calculateHoursWorked(startTime, endTime);
    startTime = convertToInternalTime(startTime);
    endTime = convertToInternalTime(endTime);
    let pay = 0;
    for (let i = 0; i < hours; i++) {
      // internal start time incremented with hour
      let _startTime = startTime + i;
      for (let j = 0; j < family.rates.length; j++) {
        const familyRateObj = family.rates[j];
        if (_startTime >= familyRateObj.startHour && _startTime < familyRateObj.endHour) {
          pay += familyRateObj.rate;
          break;
        }
      }
    }
    return pay;
  }
  printReport(family, startTime, endTime){
    let errorMessage = "";
    if (!this.isWorkingHours(startTime, endTime))
      errorMessage += "Invalid input: Outside of working hours. Expecting no earlier than 5pm and no later than 4am.\n";
    if (!this.startsBeforeFinishes(startTime, endTime))
      errorMessage += "Invalid input: End time is before start time.\n";
    if (!this.isOnTheHour(startTime))
      errorMessage += "Invalid input: Start time is not on the hour.\n";
    if (!this.isOnTheHour(endTime))
      errorMessage += "Invalid input: End time is not on the hour.\n";
    if (errorMessage)
      return errorMessage;
    const pay = this.calculateNightlyCharge(family, startTime, endTime);
    return `The ${family.name} family paid $${pay} for working from ${startTime} to ${endTime}.`;
  }
}

module.exports = Babysitter;