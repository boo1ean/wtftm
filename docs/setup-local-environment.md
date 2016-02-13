## How to setup developer environment
Just run `npm run happy` or read instruction bellow how setup env manually

### Setup software for development
* Make sure your system updated `sudo apt-get update; sudo apt-get upgrade;`
* Setup software `sudo apt-get install g++ make git nodejs npm redis-server redis-tools` (For system exclude debian based you must install node instead nodejs)
* Check software `service mongodb status; node -v; git;`
* Setup npm hosted software globally `sudo npm install -g gulp bower pm2 nodemon`

### Downloading repository
* Please make sure you have valid configured ssh connection to your git repository [how to setup](https://help.github.com/categories/ssh/)
* When you setup connection, change directory where you want to create project folder `cd ~/projects`
* Download repository `git clone git@github.com:boo1ean/wtftm.git`
* Make sure no errors and folder with <your app name> exists

### Downloading modules, components and building frontend

#### General project dependencies
* Change directory to your project 'cd <your app name>'
* Install both dependencies for frontend and building `npm run dep`
* Build frontend `gulp build`

#### Rest server dependencies
* Change directory to rest-server project folder 'cd <your app folder>/backend/rest-server'
* Install dependencies for backend `npm dep`

### IDE
In order to develop, you can use any editor. There are no requirements, but we can recommend you
* Free [Atom](https://atom.io):
      `sudo apt-get install atom`
      `apm install editorconfig linter linter-eslint`
* Free Vim `sudo apt-get install vim`
* [Web storm](https://www.jetbrains.com/webstorm/) with(or without) node.js plugin
* [Intellij IDEA](https://www.jetbrains.com/idea/) with(or without) node.js plugin

### Other software
* Chrome extension [advanced rest client](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo?hl=en-US&utm_source=ARC)
