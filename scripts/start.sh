#!/bin/bash

cd /home/ec2-user/portfolio

npm install
npm test
npm start 1>&- 2>&- &
