#!/bin/bash

ng build --configuration production
rm -R ../sfs-static/*
cp -r dist/shell-for-study/* ../sfs-static
