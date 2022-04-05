#!/bin/bash

ng build --configuration production
rm -R ../sfs-static/dist/*
cp -r dist/shell-for-study/* ../sfs-static/dist
