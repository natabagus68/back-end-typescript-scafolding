#! /usr/bin/bash
PWD=/home/ubuntu/apps/nig-backend
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
rm $PWD/public/storage || echo "Failed to remove linked storage folder"
mkdir $PWD/public/storage || echo "Folder Exist"
ln -s $PWD/public/storage $PWD/storage || echo "Failed to create symlink"
echo "Restart PM2"
pm2 restart all
echo "Wait 10 Sec for live server testing"
sleep 10
curl http://localhost/api/
echo "Finish"
exit

