#!/bin/sh

cd api/ && node src/api &
cd api/ && node src/api1 &
cd auth/ && node index &
cd gateway/ && node src/bin/www
