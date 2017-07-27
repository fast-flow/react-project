#!/bin/bash
mkdir _deploy
cd ./_deploy
svn co https://svn.duapp.com/appidda1vdfz59m --username process.env.SVN_USERNAME --password process.env.SVN_PASSWORD
