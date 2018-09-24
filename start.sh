#!/bin/sh

cd api/ && node src/bin/www &
cd auth/ && node index &
cd gateway/ && node src/bin/www
