const convertToInternalTime = require("./helperFunctions");


class Babysitter {
  constructor(){
    this.earliestStartTime = 17;
    this.latestEndTime = 4;
  }
  isWorkingHours(startTime, endTime){
    let workingHours = false;
    // convert string times into ints for internal time
    // TODO decide if conversion should happen earlier and those values will be passed
    startTime = convertToInternalTime(startTime);
    endTime = convertToInternalTime(endTime);
    if ((startTime >= this.earliestStartTime || startTime <= this.latestEndTime) 
      && (endTime >= this.earliestStartTime || endTime <= this.latestEndTime))
      workingHours = true;
    return workingHours;
  }
}

module.exports = Babysitter;