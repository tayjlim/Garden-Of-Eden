# SolecTion

SolecTion is a soft clone of Stock X. This E-Commerce site allows users to post shoes how they look in person on a specific item.

Check out it out [here!](https://solection.onrender.com/)

## Index !

[MVP Feature List](https://github.com/tayjlim/SolecTion/wiki/Features-List) | [DataBase Schema](https://github.com/tayjlim/SolecTion/wiki/db_schema) | [User Stories](https://github.com/tayjlim/SolecTion/wiki/User-Stories)

## Technologies Used


## Getting Started 
1. Clone this repository:

[(https://github.com/tayjlim/SolecTion](https://github.com/tayjlim/SolecTion)

Clone this repository (only this branch)

Install dependencies

pipenv install -r requirements.txt
Create a .env file based on the example with proper settings for your development environment

Make sure the SQLite3 database connection URL is in the .env file

Replace the value for SCHEMA with a unique name.

Get into your pipenv shell, migrate the database, seed the database, and run the Flask app

pipenv shell
flask db upgrade
flask seed all
flask run
Navigate into the react-app directory

Install npm packages

After the installation is complete run:

npm start

Amazon Web Services S3
For setting up your AWS refer to this [guide](https://github.com/jdrichardsappacad/aws-s3-pern-demo)

# Features

## Items
* Users can create an Item for sale
* Users can read/view other Items
* Users can create an Item for sale
* Users can delete their Itme for sale

## Post Section!
* Users can create posts for Items for sale
* Users can read/view all posts for an Item
* Users can edit their posts for an Item

## Cart
* Users can add Items to their cart
* Users can remove Items from their cart

## Built By 
Taylor Lim

* https://www.linkedin.com/in/tayjlim0592/
* https://github.com/tayjlim
