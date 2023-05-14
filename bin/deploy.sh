#! /usr/bin/bash

echo "Deploying..."
echo "Check Node.JS"
node --version || "echo \"Error: Node JS Not Found\" && exit"
echo "Check Yarn && Install if it doesnt exist"
yarn --version || npm i -g yarn
echo "Installing depedencies"
yarn
echo "Build"
yarn build
echo "Restart Supervisor"
supervisorctl restart nig-backend
echo "Testing"
curl http://localhost/api/
echo "Finish"
exit