#!/bin/bash
while :
do
	node server.js > ICCafeCaddyfile
  caddy reload
	sleep 60
done