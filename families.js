const Family = require("./Family");

// Instances of all the families for the babysitter to keep track of.

const familyA = new Family([
  {
    "range": "5pm-11pm",
    "rate": 15
  },
  {
    "range": "11pm-4am",
    "rate": 20,
  }
]);

const familyB = new Family([
  {
    "range": "5pm-10pm",
    "rate": 12
  },
  {
    "range": "10pm-12am",
    "rate": 8,
  },
  {
    "range": "12am-4am",
    "rate": 16,
  }
]);

const familyC = new Family([
  {
    "range": "5pm-9pm",
    "rate": 21
  },
  {
    "range": "10pm-12am",
    "rate": 15,
  },
]);

module.exports = {
  familyA,
  familyB,
  familyC
}