# Reservation APP

## Demo link:
The application is available online at [ReservationAPP](https://reservation-app-swawozny.netlify.app).

## Table of Content:

- [About The App](#about-the-app)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Status](#status)
- [License](#license)

## About The App
That project allows you to reserve seats based on provided API.

## Features

In the app there are three views. Let me explain what each of them is responsible for.

### Home View

In the home view you can choose seats number and check option that allows you to find seats next to each other. If it isn't possible you will see error message.

<p align="center">
  <img src="https://i.ibb.co/yR520Vg/home-view.png">
</p>

### Seats View

That view allows you to see which seats are reserved or not. You can choose seats you need and confirm reservation by clicking on submit button.

<p align="center">
  <img src="https://i.ibb.co/6N8DVxn/seat-view.png">
</p>

### Summary View

Summary of your reservation. Here you can see all seats that you reserved in previous view.

<p align="center">
  <img src="https://i.ibb.co/y6Dqq5S/summary-view.png">
</p>

## Technologies
![JavaScript](https://img.shields.io/badge/-JavaScript-000?&logo=JavaScript&logoColor=ddc508)
![React](https://img.shields.io/badge/-React-000?&logo=React)
![Redux](https://img.shields.io/badge/-redux-000?&logo=redux)
![Ant Design](https://img.shields.io/badge/-antdesign-000?&logo=antdesign)

## Setup

You should download db.json from https://bitbucket.org/xkom/zadanie_rekrutacyjne/src/master/ and run example json server using command

`npm run api`

Then clone down this repository, create .env file in project catalog and add enviroment variable to that file with json server url

```
REACT_APP_API_URL = 'your api url'
```

Installation:

`npm install`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  


## Status
[ReservationAPP] is done. All tasks have been implemented.

## License

MIT license @ [Sebastian Wąwoźny](sebastianwawozny@wp.pl)
