# Prerequisites

This program is runs using node.js. In order to run it, node must be installed on your machine.

Additionally, you will need NPM in order to install Jest to run the tests.

To install Jest, run `npm install` in the root directory.

# Running the program

In order to run tests (after installing Jest), run `npm run test`.

In order to run the program, run `node index.js` and pass in parameters.

The program expects the first parameter to be the family "A", "B", or "C", the second paramter to be the start time  i.e. "5:00pm/5pm", and the third parameter to be the end time i.e. "4:00am/4am".

If no parameters are passed, a default set will be used, and a message will inform the user what is expected.

Passing in "help" will also print a message on how to use the program.
