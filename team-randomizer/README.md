# Team Randomizer Assignment - 2017-02-09

An Express.js app that allows the user to enter a list of names separated by commas and enter the number of teams. Upon hitting "submit" the app should display teams with random members in each of even numbers. If the total number of names to choose from is odd, one team may have one fewer member.

See: https://codecore.certified.in/learning_modules/assignment-to-submit-team-randomizer/markings


## Dependencies

* Node 6
* PostgreSQL 9


## Installation

Install node dependencies:

    $ npm install

Create a config file named `config.json` in this directory and enter the following:

    {
      "user": "aldo",
      "database": "teampicker",
      "password": "CHANGEME",
      "host": "localhost",
      "port": 5432,
      "max": 10,
      "idleTimeoutMillis":300000
    }

_Note: this file has sensitive information (username and password) so be careful to not check it into git)._*


Create postgresql user and database:

    $ psql -U aldo teampicker
    > CREATE USER aldo;
    > ALTER USER aldo WITH PASSWORD 'CHANGEME';
    > CREATE DATABASE teampicker OWNER aldo;

_Note: make sure the password entered in the command above matches the value set in the config.json._


Create database table:

    $ psql -U postgres
    > CREATE TABLE namehistory (
        id         serial primary key,
        names      text
    );

\* Hint: this is what we use the `.gitignore` file for...


## Testing

To check for values in the database, use this query in `psql`:

    $ psql -U aldo teampicker
    > SELECT * FROM namehistory;
