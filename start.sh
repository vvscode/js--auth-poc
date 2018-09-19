#!/bin/sh

cd api/ && node src/apiA &
cd api/ && node src/apiB &
cd auth/ && node index &
cd gateway/ && node src/bin/www &
cd app-client/ && node index
