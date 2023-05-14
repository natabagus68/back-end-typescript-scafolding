#! /usr/bin/bash
echo "Pull from Repository "
sudo git checkout main 
sudo git pull origin main || (sudo git stash && sudo git pull origin main)
echo "Deploying..."
echo "Check Node.JS"
node --version || "echo \"Error: Node JS Not Found\" && exit"
echo "Check Yarn && Install if it doesnt exist"
yarn --version || npm i -g yarn
echo "Installing depedencies"
yarn
echo "Build"
yarn build
echo "Restart PM2"
pm2 restart all
echo "Wait 10 Sec for live server testing"
sleep 10
curl http://localhost/api/
echo "Finish"
exit