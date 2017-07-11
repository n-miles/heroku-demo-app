# Run Locally

`npm install`
`node server.js` OR `heroku local web`

# Run on Heroku

Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

Log into Heroku with `heroku login`

### Create app

To create an app associated with your account, get a public URL, and set up the git remote
that you will use for deploying, navigate to your application's root directory (the one with
the .git directory in it if you cloned this repo or already have a git repo associated with
the app) and execute:

`heroku create`

### Deploy app

Push a new version of your app to Heroku and have it automatically deployed to all of your
instances:

`git push heroku master`

# Explanation

When you `git push heroku master`, Heroku automatically detects what type of app you have
deployed. In this case, it's a Node.js app, so it runs `npm install` to install dependencies.
It now has a master copy of your app (they call it a slug) that can be deployed to each
instance you spin up. When a new instance is spun up, the slug is copied into the new VM,
and the command in the `Procfile` is executed.

If you change the way that your application is started, or if you write a Java app or
something, you will need to change that line in the `Procfile` to reflect the new startup
command.

# Troubleshooting

### Application error: An error occurred in the application and your page could not be served.

Your application most likely doesn't have an instance running. To check this, run
`heroku ps:scale`. When there is one instance running, output will be `web=1:Free`. If
this is not the case, run `heroku ps:scale web=1:Free` to spin up one free instance.
