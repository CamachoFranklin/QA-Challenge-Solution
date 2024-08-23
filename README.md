# QA Challenge Solution
 
# API

## Endpoints

## Swagger

See swagger documentation for more details

#### {{API_URL}}/swagger/index.html

## Run the project

```bash
cd /qa-api

```

```bash
dotnet run --launch-profile http

```

# Web App

## build the project

```bash
cd /qa-app

```

```bash
npm install
```

```bash
npm start
```

# Run Cypress Script

## Install dependencies and run test.

```bash
cd /Cypress

```

```bash
npm install or npm i
```

```bash
npm run test
```

After executing the npm run test command, a Cypress popup window will open, where you must select the browser with which you want to perform the test, then select the script you want to run and finally the test will be performed automatically and the results will be displayed on the left side of the screen.

## Environment variables

create a .env file in the root of the project and add the following variables

```bash
REACT_APP_API_URL={QA_API_URL}
```

# Testing

This is the only user that can be used to login to the application

```bash
username: testuser
password: password
```

# Stateless Application

The application is stateless, meaning that the application does not store any session information on the server. The application is designed to be stateless so that it can be easily scaled horizontally. Any **order** and **product** you create will disappear after the application is restarted.

# Api

The api is documented using swagger, see the swagger documentation for more details. The web app lacks the implementation of many of the CRUD endpoints. Swaaager documentation will show you all the endpoints that are available including the CRUD ones that are not implemented in the web app.

# Requirements

> dotnet 8 https://dotnet.microsoft.com/en-us/download
