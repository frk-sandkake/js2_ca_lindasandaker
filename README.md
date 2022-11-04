# js2_ca_lindasandaker


# Workflow - Course Assignment

## Goal
To improve the quality of an existing `project` by establishing useful workflows that make the development process more efficient.


## Brief
In order to complete this task, you are given an existing JavaScript project that has:

- API calls to `CRUD` an item
- API call to `authenticate` a user

## How to start 🙋

- Fork this repo on your GitHub account and start working.

## How to run the current project ❔❔

- Clone the project

- `npm install` to install node modules.

- `npm run build` to build the project.

- `npm run preview` to run in Production mode and this should be on a different terminal.

- `npm run dev` to run in Development mode and this should be on a different terminal.


## Requirements 🤔

- Integrate the `Prettier` package and add a script call `format` for it in the package.json file
- Integrate the `HUSKY` package and make sure that it works and run the pre-hooks before any commit
- Integrate the `ESLint` package and add a script called `lint` for it in the package.json file
- Integrate the `JEST` package and add a script called `test` for it in the package.json file

## Requirements for `Prettier` 🤔
### You need to set some rules for prettier
#### Rules:

- Tab Width should be `4 spaces`
- Quotes should be `single quotes`


## Requirements for `HUSKY` 🤔

- Make sure that you have `pretty-quick` installed
- Use a working version for `husky`



## Requirements for `ESLINT` 🤔

- Use `airbnb` eslint styleguide as your default styleguide in the config
- Add a `lint` script to lint all your code and `lint-fix` script to automatically fix the project lint issues to your package.json


## Requirements for `JEST : unit tests` 🤔

- The `logInUser` function returns a valid token when provided with valid credentials
- The `logoutUser` function clears the token from browser storage
- The `createPost` function creates a new item on the API (You need to check if the item is created from the API response)


## Requirements for `end-to-end tests` 🤔

- The `login` form validates user inputs correctly based on API restrictions
- The `create` item form validates user inputs correctly based on API restrictions
- The `logout` button logs the user out when clicked


## Submission 🎉🎉🎉

Please create a branch call it `workflow` to work during the CA on and deliver an `open Pull Request` from branch `workflow` into `master`.

Please post your PR to the peer review forum and review 2 other submissions.

### You must complete the course evaluation to unlock delivery.


### References which may help you 🫴

- https://blog.bitsrc.io/add-prettier-to-your-project-d7e91ac03d05
- https://eslint.org/ and https://eslint.org/docs/latest/user-guide/getting-started
- https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=43268076
- https://www.youtube.com/watch?v=FgnxcUQ5vho
- https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io/
