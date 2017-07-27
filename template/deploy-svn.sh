#!/bin/bash
cd ./_deploy
cd ./appidda1vdfz59m
svn update
cd ../../
cpy 'view/**/*.*' '../_deploy/appidda1vdfz59m'  --cwd=output --parents
cpy 'base/**/*.*' '../_deploy/appidda1vdfz59m'  --cwd=output --parents
cpy 'm/**/*.*' '../_deploy/appidda1vdfz59m'  --cwd=output --parents
cpy '__chunk/**/*.*' '../_deploy/appidda1vdfz59m'  --cwd=output --parents
cpy '__media/**/*.*' '../_deploy/appidda1vdfz59m'  --cwd=output --parents
cd ./_deploy/appidda1vdfz59m
svn add * --force
svn commit -m "sync file"
