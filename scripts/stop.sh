#!/bin/bash

PROCESS_ID=`sudo netstat -ltnp | grep ':3000' | awk '{print \$NF}' | cut -f1 -d '/'`

if [ -n "$PROCESS_ID" ]
then
  sudo kill -9 $PROCESS_ID
fi
