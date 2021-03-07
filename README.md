## Project Link : [Sign Up Form](https://sign-up-application-7cb99.web.app/)

# User sign up form + Angular
 This project is demonstrate how user can signup the form.
 Outline below mention my development journey including thought process and techstack.

## Requirement understanding
  - Read the requirement, done brainstroming on paper, this helps me to visualize how end product will look like.
  - Understand the Acceptance criteria of requirement.
  - Noted down the action items and their sequence which need to be cover.

## Approach
 - As per my prototype (which i draw on paper) i wrote code which can consider initial commit to github
 - Step by step start working on features like validation, form submit, info button.
 - I make sure for standard code quality get followed with best practices.

## Challenges
- For code smell initially I used Tslint, after realising Tslint is deprecated, switching from Tslint to Eslint required additional efforts and it is great learning..!

## Get started

 #### Clone the repo
```sh
    git clone https://github.com/namrata9503/signUp.git
    cd signUp
```
 #### Install npm packages
 Install the `npm` packages described in `package.json` and verify it works!
```sh
    npm install
```

 #### Build
To Build project use `ng build`
This will package and compress the application into  `/dist` directory.
```sh
    ng build
```
Use the `--prod` flag for production build. eg. `ng build --prod`

Production build can be also done in another way
In `package.json` use --prod flag in script `"build": "ng build --prod"` and then use `npm run build`


To start the app on local server `http://localhost:4200` use `npm start`
```sh
    npm start
```


#### Linter
Run eslint on project files
```sh
    npm run lint
```
#### Unit Test
To execute unit test:
```sh
    ng test
```

#### Deploying to Firebase
###### Prerequisites
- Create a free Firebase account at https://firebase.google.com
- Create a project from your [Firebase account console](https://console.firebase.google.com)
- Configure the authentication providers for your Firebase project from your Firebase account console

###### Configure this app with your project-specific details
Edit `.firebaserc` in the project root:
```sh
{
  "projects": {
    "default": "{your-project-id}"
  }
}
```

###### Install firebase-tools
```shell
$ npm install -g firebase-tools
```

###### Build and deploy the app
```shell
$ npm run build
$ firebase login
$ firebase deploy
```

By using `npm run deploy` production ready code will get deploy to Firebase

## Working model on Firebase
 [Sign Up Form](https://sign-up-application-7cb99.web.app/)
 
## Tech

- [Angular] - HTML enhanced for web apps!
- [TypeScript] - To make JavaScript development more efficient.
- [Bootstrap] - CSS framework
- [HTML/CSS] - Form Structure.
- [Eslint] - To make code more consistent and avoiding bugs
- [Font-Awesome] - Form field Icon
- [Jasmine] - For unit test
- [Firebase] - To hosting package.

## Extended scope
-  Language selection buttons: eg Dutch/English to select language of the form
-  A+ button: Increase the display size of form
-  Eye button: To see password in text format

## Thanks for reading..!
