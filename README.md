News Viewer
===================
This application fetches news from multiple open source News APIs and displays it to the user. The user can also filter the news by the source. The application is built using React, Redux, ES6, SCSS, Jest.
The application is responsive and can work till 320px. No frameworks have been used for making the app responsive.

Setup
-----

1)  Clone this repo using the following command

`git@github.com:subramaniashiva/news-viewer-react-redux.git`


2)  Move to the repo that you have just cloned and run the following command

`npm install`

3) To start the app, run

`npm start`
  Navigate to localhost:8080 in your browser to view the app

4) This project is enabled with ESLint. Any JS file that you write must be linted using ESLint. To run the linting command type

`npm run lint`

5) To build the project for production, run

`npm run build`

6) This project uses Jest for unit testing. To run tests

`npm run test`


Tech Stack
----------
Following is the tech stack:

 - **ReactJS** - The view library for the application
 -  **Redux** - For maintaining the state of the application
 -  **Redux Sagas** - For managing the side effects of updating state tree like API calls
 - **SASS** - Using SASS files instead of plain CSS
 - **Webpack** - Module bundler and also provides the local development server
 - **Babel** - Transpile ES6 to ES5
 - **ESLint** - Used to lint the JS code
 -  **Jest** - For unit testing the application

Directory Structure
-------------------
 - **dist** - Contains the distributable version of the project. Ideally this folder gets pushed into the Docker or production server.
 - **app** - Contains the source code of the app.
 - **test** - Contains jest unit test files.

app directory
-----------------
 - **api** - Contains all the details related to the APIs the application uses.
 - **components** - Contains React dumb components. 
 - **containers** - Contains React stateful components. Only the components in the folder is aware of the Redux store.
 - **redux** - Contains the redux files where the state of the application is maintainer. To understand the structure of the state tree, we can see the root-reducer..js file under the reducer directory.
 - **sagas** - Used for handling the side effects operations in state tree like API requests.
 - **styles** - Contains styles for the application. Theme of the application is defined using a base, reset and constants file.
 -  **utils** - Contains utility functions that will be used throughout the application.

Git Flow
-------
This project uses Git Flow for developing. 
 - **master** - The main branch. Resembles the production version.
 - **develop** - The current development version of the product. Contains code that are ready to be pushed into master. 
 - **feature/x** - Feature branch, branched off from develop. To develop a new feature create new feature branch from the develop and start. Merged into develop when the feature is ready.
 - **fix/x** - Branch to fix bugs in the application. Branched off from develop and merged back when ready.

Coding Guidelines
-------
- BEM methodology is followed for sass files.
- Every news source will have its own adapter to convert the data into common format used by the application. This makes it easier if an API changes its structure in future.
- API path is loaded from a separate file. It will easier to change the API path in future.

**ESLint**

The project is enabled with ESLint and a production version of application can be made only if all the files pass the ESLint test.

The reason for choosing ESLint is, it enforces a common rule across the team. Developers working on this project will be forced to have uniform code styling. This helps in maintaining the project in long run.

 - ESLint configurations are maintained in the .eslintrc file in the root directory
 - The project uses babel as its parser for JS files and ES6 is enforced for all JS files
 - The project extends the [**ESLint recommended rules**](https://eslint.org/docs/rules/).

Future Improvements
-------
- Improve the testing coverage of the application.
- Proper error logging service.
- Add more news sources.
- Enable Pagination for the news.
- Filter news by category like politics, sports..etc.
- Making the application progressive.
