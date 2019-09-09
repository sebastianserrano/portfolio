#!/bin/bash

cd /home/ec2-user/portfolio

npm install
npm test
npm start > /dev/null 2>&1 & disown
