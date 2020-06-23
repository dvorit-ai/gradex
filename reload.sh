#!/bin/sh
# This is a comment!
git clone https://github.com/dvorit-ai/gradex
cp -r gradex/* ../gradex/
export PATH=$PWD/bin/:$PATH
forever stop server.js
forever start server.js
yes | rm -r gradex/

