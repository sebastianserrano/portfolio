#!/bin/bash

PORT=3000
RETRY_SECONDS=5

while ! curl -I localhost:${PORT} > /dev/null 2>&1;do
  echo Failed to pass check at port ${PORT}, retrying in ${RETRY_SECONDS} seconds
  sleep $RETRY_SECONDS
done
