#!/bin/bash

if [ `fuser 3000/tcp` ]
then
  fuser -k 3000/tcp
fi
