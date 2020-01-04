const convertToInternalTime = require("./helperFunctions");

class Family {
  // rates come in the format of an array of objects
  /*
  Example:
    [
      {
      "range": "5pm-11pm",
      "rate": 15
    },
    {
      "range": "11pm-4am",
      "rate": 20,
    }
  ]
  */
  constructor(name, rates) {
    this.name = name;
    this.rates = rates;
    this.createInteralRanges();
  }
  // convert ranges from rates to match internal time in an array for iterating
  createInteralRanges() {
    for (let i = 0; i < this.rates.length; i++) {
      const rateObj = this.rates[i];
      rateObj.startHour = convertToInternalTime(rateObj.range.split("-")[0]);
      rateObj.endHour = convertToInternalTime(rateObj.range.split("-")[1]);
    }
  }
}

module.exports = Family;