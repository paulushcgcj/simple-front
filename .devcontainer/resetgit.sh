#!/bin/sh
cp -r /.ssh/ ~/

if [[ -e ~/.ssh/id_rsa ]]; then  
  chmod 600 ~/.ssh/id_rsa 
fi
if [[ -e ~/.ssh/id_rsa.pub ]]; then
  chmod 644 ~/.ssh/id_rsa.pub 
fi
if [[ -e ~/.ssh/known_hosts ]]; then
  chmod 644 ~/.ssh/known_hosts 
fi
