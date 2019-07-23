# Example-single-sign-on-js

An example to deploy a single-sign-on app

## Disclaimer

1. This example uses PUG as the view engine, remember to intall pug **`npm install pug --save`** in the folder.

2. Remember to install bower **`npm install -g bower`** and install bootstrap **`bower install bootstrap`**, otherwise you won't have dependencies to **jQuery** and the frontend page is going to look ugly.

See more [NodeJS Express from scratch](https://www.youtube.com/watch?v=lAUncPg_FVw)

## What is Single Sign On (SSO)?

Single sign on is a property of access control that you may sign on with one account to several independent software systems.

For example, you may have only one Google account, but have access Gmail, Google Drive, YouTube... on one sign on process.

SSO allows users to have only one account but can access to multiple services. Therefore, as a service provider, we want our users to have a more friendly-using experience and not to be bothered with having many accounts and passwords to remember.

## Quick Start

STEP1 Install node modules

    npm install --save {moduleName}
    
STEP2 Push your service

    cf push

## Code description
