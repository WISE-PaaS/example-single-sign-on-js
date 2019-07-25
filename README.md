# Example-single-sign-on-js

An example to deploy a single-sign-on app

## Disclaimer

1. This example uses PUG as the view engine, remember to intall pug **`npm install pug --save`** in the folder.

2. Remember to install bower **`npm install -g bower`** and install bootstrap **`bower install bootstrap`**, otherwise you won't have dependencies to **jQuery** and the frontend page is going to look ugly.

See more [NodeJS Express from scratch](https://www.youtube.com/watch?v=lAUncPg_FVw)

## What is Single Sign On (SSO)?

SSO is a property of access control that you may sign on with one account to several independent software systems.

For example, you may have only one Google account, but have access Gmail, Google Drive, YouTube... on one sign on process.

SSO allows users to have only one account but can access to multiple services. Therefore, as a service provider, we want our users to have a more friendly-using experience and not to be bothered with having many accounts and passwords to remember.

## Quick Start

STEP1 Install node modules

    npm install --save {moduleName}
    
STEP2 Push your service

    cf push

## Code description

```js
const express = require('express');
const path = require('path');

// init app
const app = express();

//load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','pug');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

//new home page
app.get('/', function(req,res){
    res.render('home_index');
})

const port = process.env.PORT || 3030;
app.listen(port, function() {
    console.log(`Listening on port ${port}...`);
});
```

The main code here does nothing special, it basically make some basic setups and starts listening.

```js
$('.check-status').on('click', function () {
    $.ajax({
        url : 'https://portal-sso.wise-paas.io/v2.0/users/me',
        xhrFields : {
            withCredentials: true
        }
    }).done(function (user) {
        alert('Hello! ' + user.firstName + ' ' + user.lastName+ ' ' + user.country);
    }).fail(function () {
        alert('You are not logged in!');
    });
});
```

This **main.js** is the most important part of this SSO project. After signing in to any service of WISE-PaaS, we get a token. With this token, we are able to use all the services which is binded to the user on single sign on. Therefore, we need to get the token information. 

We use the REST API provided by WISE-PaaS: **`GET`**, base URL + **`/v2.0/users/me`**. 

See more information [WISE-PaaS SSO API](https://portal-technical.wise-paas.io/doc/api-document-portal.html#SSO-2)
