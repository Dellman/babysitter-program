# Prerequisites

This program is runs using node.js. In order to run it, node must be installed on your machine.

Additionally, you will need NPM in order to install Jest to run the tests.

To install Jest, run `npm install` in the root directory.

# Running the program

In order to run tests (after installing Jest), run `npm run test`.

In order to run the program, run `node index.js` and pass in parameters.

The program expects the first parameter to be the family "A", "B", or "C", the second paramter to be the start time i.e. "5:00pm/5pm/5:00p.m.", and the third parameter to be the end time i.e. "4:00am/4am/4:00a.m.". Putting a space will cause an issue as node will infer that to be another parameter, unless wrapped in quotations. Times are expected to start and end on the hour.

If no parameters are passed, a default set will be used, and a message will inform the user what is expected.

Passing in "help" will also print a message on how to use the program.

Examples:
`node index.js a 5pm 12am`

`node index.js c "7:00 P.M." "3:00 A.M."`

`node index.js b 7:00p.m. 11:00p.m.`

`node index.js help`

`node index.js`
