## Reservation APP
That project allows you to reserve seats based on provided API.

## Installation

You should download db.json from https://bitbucket.org/xkom/zadanie_rekrutacyjne/src/master/ and run example json server using command

### `npm run api`

Then create .env file in project catalog and add enviroment variable to that file with json server url

```
REACT_APP_API_URL = 'your api url'
```

At the end use

### `npm install`

to install all packages listed in package.json

## Usage

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Features
In the app there are three views. Let me explain what each of them is responsible for.

### Home View

In the home view you can choose seats number and check option that allows you to find seats next to each other. If it isn't possible you will see error message.

![Home View](https://i.ibb.co/yR520Vg/home-view.png)

### Seats View

That view allows you to see which seats are reserved or not. You can choose seats you need and confirm reservation by clicking on submit button.

![Seats View](https://i.ibb.co/6N8DVxn/seat-view.png)

### Summary View

Summary of your reservation. Here you can see all seats that you reserved in previous view.

![Summary View](https://i.ibb.co/y6Dqq5S/summary-view.png)

## Technological Stack

![JavaScript](https://img.shields.io/badge/-JavaScript-000?&logo=JavaScript&logoColor=ddc508)
![React](https://img.shields.io/badge/-React-000?&logo=React)
![Redux](https://img.shields.io/badge/-redux-000?&logo=redux)
![Ant Design](https://img.shields.io/badge/-antdesign-000?&logo=antdesign)

## Demo

The application is available online at [ReservationAPP](https://reservation-app-swawozny.netlify.app).

## Author
Sebastian Wąwoźny
