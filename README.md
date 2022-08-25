

# Development Setup

## Clone Repository Locally

1. Run this command in your terminal `git clone https://github.com/freedom-rains/rains.git`
2. Run this command to install all your node modules `npm run clean`
   - Run this directory in the `client` directory for BE
   - Run this directory in the `server` directory for BE
3. Look at the **pinned** items in the #eng-backend and #eng-frontend channels on slack to get a copy of the .env.local file that you will need to run the react app locally.
   - You will need an .env.local file for the `client` directory
   - You will need an .env.local file for the `server` directory

## Work on Project Locally

### Create a New Branch

1. Run this command to see what branch you're currently on `git status`

   - If you aren't on the branch named **develop**, you will need to run this command `git checkout develop`

2. Now that you are in the **develop** branch, check for any updates:
   Run these commands one after another.

```
git pull
```

3. You should now be ready to create a new branch.
   - Run this command `git checkout -b CU-###`. Change **###** to the ClickUp ticket ID.
   - Example `git checkout -b CU-29gb92z`

## Backend Setup

### View the Project on the BE

1. Make sure you are in the `server` directory: `cd server`
2. Run this command in your terminal: `npm start`

### Update BE API Docs

1. Make sure you are in the `server` directory: `cd server`
2. Install apidoc: `npm install -g apidoc`
3. Run this command in your terminal: `apidoc -i ./ -o doc/`
   - Repeat this comman whenever you make changes to the API doc

## Frontend Setup

### View the Project on the FE

1. Do the steps from `View the Project on the BE` and keep that running.
2. Then go back to the root directory: `cd ../client`
3. Then run this command in your terminal: `npm start`

### Engineering Process

Go to this link: https://app.clickup.com/36138342/v/l/f/114091969.
It has information on setting up your PR's and more

