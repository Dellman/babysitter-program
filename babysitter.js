const convertToInternalTime = require("./helperFunctions");


class Babysitter {
  constructor(){
    this.earliestStartTime = 17;
    this.latestEndTime = 4;
  }
  isWorkingHours(startTime, endTime){
    let workingHours = false;
    // convert string times into ints for internal time
    startTime = convertToInternalTime(startTime);
    endTime = convertToInternalTime(endTime);
    if ((startTime >= this.earliestStartTime || startTime <= this.latestEndTime) 
      && (endTime >= this.earliestStartTime || endTime <= this.latestEndTime))
      workingHours = true;
    return workingHours;
  }
  startsBeforeFinishes(startTime, endTime){
    let startMeridiem = startTime.slice(-2).toLowerCase();
    let endMeridiem = endTime.slice(-2).toLowerCase();
    if (endMeridiem === 'pm' && startMeridiem === 'am')
      return false;
    else if (endMeridiem === startMeridiem)
      // convert string times into ints for internal time. If the end value is larger, that means it started later
      return convertToInternalTime(startTime) < convertToInternalTime(endTime);
    else
      return true;
  }
}

module.exports = Babysitter;