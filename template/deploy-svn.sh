#!/bin/bash
svn co https://svn.duapp.com/appidda1vdfz59m --username process.env.SVN_USERNAME --password process.env.SVN_PASSWORD
cd ./appidda1vdfz59m
svn update
cd ../
## `npm install -g cpy-cli`
## or `yarn global add cpy-cli`
cpy 'view/**/*.html' '../appidda1vdfz59m'  --cwd=output --parents
cd ./appidda1vdfz59m
svn add * --force
svn commit -m "sync file"
rm -rf ./appidda1vdfz59m
