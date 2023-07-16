[![License: MIT license](https://img.shields.io/badge/License-MIT_license-success)](https://opensource.org/licenses/MIT)    
![Project status](https://img.shields.io/badge/Status-Complete-success)

# CBC Week 14 Challenge: Tech Blog

## General Information

This is the week 14 challenge for the UC Berkeley Coding Bootcamp.  The goal of this project was to create a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.  This site was built using the Model-View-Controller paradigm and uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

---

## Table of Contents

* [General Information](#general-information)
* [Deployed Site](#deployed-site)
* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Contact](#contact)
* [License](#license)
* [How to Contribute](#how-to-contribute)

## Deployed Site

The deployed site can be found [here](https://jdempe-tech-blog-6e7fa636d502.herokuapp.com/).

---

## Technologies Used

* [node.js v18.12.1](https://nodejs.org/en) -  A scalable server-side JavaScript runtime;
* [mySQL v8.0.33](https://www.mysql.com/) - Open-source relational database management system.
* [jQuery v3.6.0](https://jquery.com/) - A JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.
* [bootstrap v5.2](https://getbootstrap.com/docs/5.2/getting-started/introduction/) - A popular front-end framework that provides a collection of pre-built CSS and JavaScript components for responsive web design.
* [handlebars v4.7.7](https://handlebarsjs.com/) - Template engine for rendering dynamic HTML templates.
* [bcrypt v5.1.0](https://www.npmjs.com/package/bcrypt) - Password hashing and encryption for enhanced security.
* [sequelize v6.31.1](https://sequelize.org/) - ORM (Object-Relational Mapping) for interacting with relational databases in an object-oriented manner.
* [connect-session-sequelize v7.1.6](https://www.npmjs.com/package/connect-session-sequelize) - Integration of session management with Sequelize for persistent session storage.
* [express v4.18.2](https://www.npmjs.com/package/express) - Web application framework for building server-side applications.
* [express-handlebars](https://www.npmjs.com/package/express-handlebars) - Templating engine for rendering dynamic HTML templates.
* [express-session v.17.3](https://www.npmjs.com/package/express-session) - Middleware for managing session data in Express.
* [mysql2 v3.3.1](https://www.npmjs.com/package/mysql2) - MySQL database driver for Node.js.
* [nodemon v2.0.22](https://www.npmjs.com/package/nodemon) - Development tool for automatically restarting the server during code changes.
* [dotenv v16.0.3](https://www.npmjs.com/package/dotenv) - Loading environment variables from a .env file.
* [Heroku](https://www.heroku.com/) - Cloud platform for deploying and managing applications.

---

## Installation
### Prerequisites
* [Node.js](https://nodejs.org/en/)
* [mySQL](https://www.mysql.com/)

### Local Installation
If you would prefer to see a local version of the site, follow the steps below:

1. Clone the [repository](https://github.com/JDempe/bootcamp-14-tech-blog) to your local machine.
2. Navigate to the root directory of the cloned repository in your terminal.
3. Run `npm install` to install the dependencies.
4. Create a `.env` file in the root directory of the cloned repository.  An example of the contents of the `.env` file is shown below:
    ```
    DB_NAME=techblogdb
    DB_USER=root
    DB_PW=your_password
    SECRET=your_secret
    ```
5. Create the database by logging into mySQL and running `source db/schema.sql`.
6. Seed the database by running `npm run seed`.
7. Start the server by running `npm start` or `npm run nodemon` if you have nodemon installed.
8. Navigate to `http://localhost:3001` in your browser to view the site.

---

## Usage
### Homepage

The homepage displays all of the blog posts that have been created.  If the user is not logged in, they will be prompted to log in or sign up when they try to add a comment. If the user is logged in, they will be able to add a comment to any of the posts.

![Homepage](./documentation/images/jdempe-tech-blog%20homepage.png)

### Dashboard

The dashboard displays all of the posts that have been created by the logged in user.  The user can click on any of the posts to edit or delete them.  The user can also create a new post by clicking on the "New Post" button.

![Dashboard](./documentation/images/jdempe-tech-blog%20dashboard.png)

---

## Credits
### Resources

The following resources and individuals made invaluable contributions to the project:

#### Class Resources

Code from the Wanderlist project was used as a starting point for this project.  This project was created by the following individuals:

- Olena Pashchenko - [UserOlena](https://github.com/UserOlena)
- Jennifer Rytikoff - [jenryt](https://github.com/jenryt)
- Bandhavi Bendi - [bbandhu](https://github.com/bbandhu)
- Kevin Small - [kevrev](https://github.com/Kevrev)
- Joshua Dempe - [JDempe](https://github.com/JDempe)

#### Images

- [Favicon Converter](https://favicon.io/favicon-converter/) provides a simple way to take any image and convert it to a favicon.

- [Icons8](https://icons8.com/icons/) provide simple images and icons.
  
- [Matt Visiwig](https://twitter.com/MattVisiwig) created an SVG background creator that provides many free options.  The background image was created from [this](https://www.svgbackgrounds.com/) tool.

- [Shields.io](https://shields.io/) provides the badges for the README.

#### Templates / Libraries

- [SimpleBar](https://github.com/Grsmto/simplebar) is a custom scroll bar library that allows for replacing the default browser scroll bars.

- [Ian Lunn](https://github.com/IanLunn) created an awesome library called [Hover.css](https://twitter.com/davidmacd) that adds some plug and play css animation classes.  We used this for some of the moving icons on the page.

#### Data

- [ChatGPT](https://chat.openai.com/) is a chatbot that uses GPT-3 to generate responses.  The chatbot was used to come up with the site name.

---

## Contact
### Collaborators
- Joshua Dempe - [JDempe](https://github.com/JDempe)

---

## License

This project is open source and available under the [MIT](./LICENSE) license.

---

## How to Contribute

Looking to contribute?  Find out how at https://github.com/JDempe/bootcamp-14-tech-blog.
