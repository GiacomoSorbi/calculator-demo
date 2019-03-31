## Version number: 627d7be039e0085025a51d47e42bdd970409ec1c

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

This project has been created using `create-react-app` with the `--use-pnp` option; before running it, be sure to create a `.pnp` folder with the required files from the necessary packages running

### `yarn`

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You can use the calculator in a similar way to how you would use a pocket calculator; in case or 'Error' please reset the calculator pressing 'CE'

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Nice to Have/Do

With more time available, I would definitely consider:

- expanding/improving the test coverage;
- improve CSS with some CSS-compiler (SCSS, LESS or other option);
- implementing better handling of calculator-like functionalities (after pressing `=` for example any number should reset the display, not add to that), possibly changing the state to keep track of both the current expression and the last key pressed;
- dynamically handling the size of the display text to go on 2 lines when there are more than X characters;
- preventing users from typing blatantly wrong syntax (closed parentheses before a greater or equal number of open parenthesis, no more than one `.` per number, etc);
- avoiding to use `eval` to compute a result with [`evaluateExpression`](./src/utilities/index.js) - as they say: "eval is evil";
- ideally replacing it with a parsing function that moves singling out elements in parenthesis, recursively calling itself to extracts numbers and operators and to compute the result of it;
- better error handling (currently we just display "Error" in any case, be it a division by zero, a missing parenthesis, etc)
- support for other insert operators (exponentiaion, modulo);
- support for non-insert operators (logarithm, abs).
