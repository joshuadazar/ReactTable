# Data Table (React and MaterializeCSS)

<img width="150px" src="https://avatars.githubusercontent.com/u/6062203?v=4" alt="Profile picture">
<br/>
<b>Project includes:</b>
</br>
Data Table : <a href="https://app.codecov.io/gh/jbetancur/react-data-table-component">
https://app.codecov.io/gh/jbetancur/react-data-table-component</a> </br>
State management: `RxJS`
CodeBase: `Typescript & SCSS`
Stuyle library: `MaterializeCSS`

## Available Scripts

In the project directory, you can run: SPA application

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
<h1>Internet URL [https://reactdatatable.web.app/]</h1>

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `Firebase Setup`
 - npm install firebase
 - firebase login 
 - firebase init (follow the steps)  (In option replace index.html type `no`)
 
### `Public site`

Builds the app for production to the `build` folder.\
Deploy local: `npm run build` ( in `public` directory)
Deploy firebase hosting: `firebase deploy`

### `app firebase`
- 1 `firebase apps:create` and define a application name
- 2 `firebase apps:sdkconfig WEB 1:949051954393:web:8a1eaec847930858a59ac8`
- 3 get this <i>key</i> </br>
<strong>firebase.initializeApp({
  "projectId": "reactdatatable",
  "appId": "1:949051954393:web:8a1eaec847930858a59ac8",
  "storageBucket": "reactdatatable.appspot.com",
  "locationId": "us-central",
  "apiKey": "AIzaSyDVGkZLSlrbGh4UKQ6r7NDdk8mPY3cbhlE",
  "authDomain": "reactdatatable.firebaseapp.com",
  "messagingSenderId": "949051954393"
});</strong>
- create in root path `firebase-app.js`with key

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

