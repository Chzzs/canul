#! /bin/bash

echo "Starting server...";
screen -S mongo -d -m mongod --dbpath .database;
echo "Mongo server is started";
screen -S node -d -m node app/index.js dev;
echo "Node server is started";
