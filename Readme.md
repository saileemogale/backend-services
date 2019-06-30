# Backend Services

## API Details
- Details of all API's

GET Teams
- https://teams-backend-services.herokuapp.com/v1/teams

GET Team with team name
- https://teams-backend-services.herokuapp.com/v1/teams/Arsenal

Create Team
- POST
- Request Body:
{
    "name": "123",
    "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/632.jpg"
}


Update Team if name is already present
- POST
- Request Body:
{
    "name": "Arsenal",
    "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/635.jpg"
}

## Plugins
Various plugins used for development. Please find the list as follows -

 - body-parser
 - cookie-parser
 - csurf
 - express
 - express-generator
 - express-session
 - helmet
 - log4js
 - morgan
 - nodemon

## Unit Testing is also covered with following plugins -
    - mocha
    - nyc
    - request
    - sinon
## Security
- CRSF secuity and secured HTTP headers are implemented with below packages -
    - helmet
    - csurf

## CI/CD
    - Updated yml for continous integration on travis
        - https://travis-ci.com/saileemogale/backend-services
    - Deployed application on Heroku