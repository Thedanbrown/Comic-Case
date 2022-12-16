# Comic-Case
Created by Daniel Brown (https://github.com/Thedanbrown), Tyler Kandarian (https://github.com/TylerKandarian) and Janaee Wallace (https://github.com/Jae-as)

## Table of Contents
1. [Description](#Description)
2. [User Stories](#User-Stories)
3. [Acceptance Criteria](#Acceptance-Criteria)
4. [Screenshots](#Screenshots)
5. [Installation](#Installation)
6. [Deplyed Application](#Deployed-Application)

# Description
This is a group project that was completed by Daniel Brown, Tyler Kandarian and Janaee Wallace as part of the Georgia Tech Bootcamp Project 2. This application is an MVP comic book collector website where like minded collectors and curators can showcase their priceless collections to a community of likeminded individuals. In the long term, this closed but close-knit community will also support a collector marketplace where collectors can auction off and compete for valuable comics to build out their collections. Success within this group project was defined by ensuring the following:
1. Use of Node.js and Express.js to create a RESTful API
2. Use of Handlebars.js as the template engine
3. Use of MySQL and the Sequelize ORM for the database
4. Use of bot GET and POST routes for retrieving and adding new data
5. Use of at least one new library, package or technology that was not covered during the Georgia Tech bootcamp class
6. A folder structure that meets the MVC paradigm
7. Authentication (express-session and cookies)
8. Protected API keys and sensitive information using environment vairables
9. A deployed application using Heroku (with data)
10. A polished, responsive UI
11. An application that accepts and responds to user input
12. Meets good-qualitt coding standards
13. This professional README :) 

## User Stories
***
###### [Back to Table of Contents](#Table-of-Contents)
```
AS A Comic Collector
I WANT a way to easily track and share my comic collection with like minded individuals
SO THAT I can easily track which comics I own and which I need to collect to complete the collection

AS A Comic Collector
I WANT to be able to login to the Comic Case website
SO THAT I can update and share my collection

AS A Comic Collector
I WANT to be able to create a profile on the Comic Case website
SO THAT I can update and share my collection

AS A Comic Collector
I WANT to be able to search for and add at least one comic to my digital collection when I first sign up
SO THAT I have at least one comic in my collection after signing up

AS A Comic Collector
I WANT to be able to add additional comics after adding my first comic or check out the Comic Case feed
SO THAT I can upload my complete collection OR go to view others collections after I sign up
```

## Acceptance Criteria
***
###### [Back to Table of Contents](#Table-of-Contents)
```

GIVEN Collectors want a community to digital track and showcase their comic collections
WHEN users navigate to the Comic Case
THEN they are able to sign in or sign up for comic case

WHEN a new user signs up
THEN the userRoutes api creates a new user

WHEN a new user signs up
THEN their user data is saved to the user model

WHEN an existing user logs in
THEN the login JS validates the user login information and handles the login functionality

WHEN a user searches for a comic using the Comic Vine API (https://comicvine.gamespot.com/api/documentation)
THEN the API fetches the relevant comic information

WHEN a user has found their comic
THEN they can post the comic data to the comic model

WHEN a user navigates to the feed page
THEN the comic api fetches all the data in the comic model to display it on the feed page

WHEN a user navigates across all page
THEN handlebars manage dynamic changes across pages

WHEN developing application
THEN developers use JSHint to ensure high JavaScript quality when developing (https://www.npmjs.com/package/jshint)

JSHint: This static code tool checks code quality through linting. Linting is a process of running a program that checks for errors. JSHint detects errors in javascript code. It is community-driven and extremely flexible.

```

## Screenshots
***
###### [Back to Table of Contents](#Table-of-Contents)

## Installation
***
###### [Back to Table of Contents](#Table-of-Contents)
Key packages:
1. Bcrypt
2. Connect-Session-Sequlize
3. .NEV
4. JSHint
5. Express
6. Express Handlebars
7. Express Session
8. MySQL2
9. Path
10. Router
11. Sequelize
12. Body Parser

## Deployed Application
***
https://comic-case.herokuapp.com/
###### [Back to Table of Contents](#Table-of-Contents)
