#!/bin/sh

npm install
bower install

grunt

export NODE_ENV=production
npm start
