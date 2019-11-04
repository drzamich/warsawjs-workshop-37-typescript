# Simple Weather API consumer
Project created during [Warsaw JS](https://warsawjs.com/) workshop on dependency injection and inversion of control in TypeScript apps.

Based on the project created by the tutor: [Tomasz Budrewicz](https://github.com/tBlabs)

## Installation

1. Clone the repo
2. Open the `.env` file and paste there the API key obtained at https://openweathermap.org/api
3. Run `npm i` to install dependencies

## Basic usage

### Get information about weather
```
npm start
```

### Change the city
Edit the `itemsList` in `src/api/WeatherApiConfig.ts`. City ID can be obtained at http://bulk.openweathermap.org/sample/.

### Run the app in watch mode
```
npm run serve
```
