# Course assignments in JavaScript2 and Workflow 
Author: Linda Sandaker - School: Noroff VOC Oslo - Year: 2022

## Goal JavaScript2

Make a social platform with Noroff social API. 

https://nf-api.onrender.com/docs/static/index.html#/

## Goal Workflow

To improve the quality of an existing `project` by establishing useful workflows that make the development process more efficient.

## How to run the current project:

-   Clone the project

-   `npm install` to install node modules.

-   `npm run build` to build the project.

-   `npm run preview` to run in Production mode and this should be on a different terminal.

-   `npm run dev` to run in Development mode and this should be on a different terminal.

## `Prettier` and `HUSKY` 
  
Integrate the `Prettier` package and add a script call `format` for it in the package.json file `npx prettier --write .`
Integrate the `HUSKY` package and make sure that it works and run the pre-hooks before any commit
Make sure that you have `pretty-quick` installed
Use a working version for `husky`

## `ESLINT` with `airbnb` eslint styleguide:

-   Integrate the `ESLint` package and add a script called `lint` for it in the package.json file

### In terminal:

Command line: <br>
`npm init @eslint/config`

<details>
<summary> Follow this eslint setup: </summary>

√ How would you like to use ESLint? · style <br>
√ What type of modules does your project use? · esm <br>
√ Which framework does your project use? · none <br>
√ Does your project use TypeScript? · No / Yes <br>
√ Where does your code run? · browser, node <br>
√ How would you like to define a style for your project? · guide <br>
√ Which style guide do you want to follow? · airbnb <br>
√ What format do you want your config file to be in? · JSON <br>
Checking peerDependencies of eslint-config-airbnb-base@latest <br>
Local ESLint installation not found. 

The config that you've selected requires the following dependencies: <br>
eslint-config-airbnb-base@latest eslint@^7.32.0 || ^8.2.0 eslint-plugin-import@^2.25.2 <br>
√ Would you like to install them now? · No / Yes <br>
√ Which package manager do you want to use? · npm <br>
Installing eslint-config-airbnb-base@latest, eslint@^7.32.0 || ^8.2.0, eslint-plugin-import@^2.25.2
</details>

### In package.json:

"scripts": {
"lint": "npx eslint ./**",
"lint-fix": "npx eslint --fix ./**"
}

## `JEST` : unit tests 

-   Integrate the `JEST` package and add a script called `test` for it in the package.json file
-   The `logInUser` function returns a valid token when provided with valid credentials
-   The `logoutUser` function clears the token from browser storage
-   The `createPost` function creates a new item on the API (You need to check if the item is created from the API response)

### In terminal:

`npm install -g jest` <br>
`npm install --save-dev @babel/plugin-transform-modules-commonjs` <br>

## `Cypress` : end-to-end tests 

-   The `login` form validates user inputs correctly based on API restrictions
-   The `create` item form validates user inputs correctly based on API restrictions
-   The `logout` button logs the user out when clicked

## References which may help you 🫴

-   https://blog.bitsrc.io/add-prettier-to-your-project-d7e91ac03d05
-   https://eslint.org/ and https://eslint.org/docs/latest/user-guide/getting-started
-   https://www.linkedin.com/learning/eslint-integrating-with-your-workflow/solution-add-eslint-to-a-project?u=43268076
-   https://www.youtube.com/watch?v=FgnxcUQ5vho
-   https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io/
