# YouQuity

YouQuity is an app to help small businesses manage their equity structures.  This is something that many privately held small businesses struggle with.  Attorneys are typically used to manage this process, at a cost of thousands of dollars (or more) per year, but with the proper tools this process can be managed by the small business with minimal attorney oversight, greatly reducing costs.

This app is currently in the MVP (minimum viable product) stage, and right now it allows companies to create share classes, and create issued or pending investment records.

There is currently a single user role in the system.  The test account can be accessed with the following credentials:

username: test@test.test
password: testing123

**The live app can be accessed at http://youquity.amandareilly.me**

## Using Locally
This app was bootstrapped using 'create-react-app' ([Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started));

If you would like to run this app in your local development environment, you will also need to run the companion api server (https://github.com/amandareilly/youquity-api).  Instructions for building and running the api server are included in the README file of that repo.

To install and run this client, cd into the project directory and run 'npm install' (or 'sudo npm install' depending on your environment settings).

Because this is currently an MVP, full user and company creation is not yet available.  In order to use the client, you will first need to manually connect to the API (example: via Postman) and make the following requests:

POST /api/users :
```javascript
{
    "firstName": "User",
    "lastName": "Name",
    "email": "test@test.test",
    "password": "testing123"
}
```

POST /api/auth/login :
```javascript
{
    "email": "test@test.test",
    "password": "testing123"
}
```

POST /api/company (using jwt from second POST request as bearer token):
```javascript
{
    "name": "Test Company"
}
```

Once dependencies are installed and initial data is created, you can run 'npm start' to start the server, which can be accessed at http://localhost:3000.

Please note, you may also need to modify the API_BASE_URL config variable to connect to your local api server.


## Techology Used

* HTML5
* CSS3
* JavaScript

### Frameworks and Packages

* [React](https://reactjs.org/)
* [react-router](https://www.npmjs.com/package/react-router)
* [react-redux](https://www.npmjs.com/package/react-redux)
* [redux-form](https://www.npmjs.com/package/redux-form)
* [redux-thunk](https://www.npmjs.com/package/redux-thunk)

### Build Tools

* [NPM](https://www.npmjs.com/) - Package Manager
* [SASS](https://sass-lang.com/) - CSS Pre-Processor
* [Babel](https://babeljs.io/) - JavaScript Compiler
* [webpack](https://webpack.js.org/) - Module Bundler
* [git](https://git-scm.com/) - Source Control

### CI and Depoloyment

* [Travis CI](https://travis-ci.org/) - Continuous Integration
* [Heroku](https://www.heroku.com) - Cloud Deployment

## Author

* **Amanda Reilly** - [amandareilly](https://github.com/amandareilly)

## License

This project is licensed under the MIT License.

## Screenshots

[!login page screenshot](https://github.com/amandareilly/youquity-client/blob/master/screenshots/login-page.PNG)

[!company dashboard screenshot](https://github.com/amandareilly/youquity-client/blob/master/screenshots/company-dashboard.PNG)

[!completed investment listing screenshot](https://github.com/amandareilly/youquity-client/blob/master/screenshots/completed-investments-listing.PNG)

[!pending investment listing screenshot](https://github.com/amandareilly/youquity-client/blob/master/screenshots/pending-investments-listing.PNG)

[!issue shares form screenshot](https://github.com/amandareilly/youquity-client/blob/master/screenshots/issue-shares-form.PNG)

[!editing pending investment screenshot](https://github.com/amandareilly/youquity-client/blob/master/screenshots/editing-pending-investment.PNG)

[!add share class form screenshot](https://github.com/amandareilly/youquity-client/blob/master/screenshots/add-share-class-form.PNG)

[!menu panel screenshot](https://github.com/amandareilly/youquity-client/blob/master/screenshots/open-menu-panel.PNG)