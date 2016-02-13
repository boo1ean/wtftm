## How to contribute

### General cases for developer
* We use camelCases everywhere for naming, except files.
* For files please use lower case with dash separator for words. For versioning please use dots. For example: script-name.js, script-name-1.2.3.js
* Please make sure you read and understand [REST principles](http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api) Please always use only plural noun in path, without verbs.
* Tests must be independent. Nobody guarantee that another test will be run. Nobody guarantee that another tests will end before\after your test. So every test must works alone.

### Branching

We use simple workflow master and feature branching for now.
When we will have more then 2-3 developers we will use git flow branching model [gitflow](https://github.com/nvie/gitflow)

Before change code you must understand what do you want to do:
* Small commit (small feature or bug fix)
* Big commit(s) (new feature that have more than one commit)

If you choose first way you can commit directly into master branch, otherwise you must use feature branching.
For example:

* Pull code from server `git pull origin master`
* Create new branch `git branch -b "<JIRA_TICKET_NUMBER>[-your-short-description]"`

### Making changes

* Checkout branch which you need
* Do changes
* Make sure your changes works
* Make sure you have added the necessary tests for your changes and tests pass.
* `npm run pre-commit` - this start code-style checking, static code analysis and running Integration tests

### Running
* Change directory to rest-server project folder 'cd <your app folder>/backend/rest-server'
* Run app `NODE_ENV=development node index.js`
* Server available at http://localhost:3000
* Also you can see api documentation at http://localhost:3000/apidocs/ when server running in development mode

### Integration testing
> Note: You rest app must works during tests
* `npm run test`

### Committing
> Note: You can't commit directly to master / dev without run pre-commit and fixing problems!

* `git add <your files list>`
* `git commit -m "<JIRA_TICKET_NUMBER> [your-description]"`

### Merging / Pull requesting

When you finish your feature and commit, you must merge your branch with parent branch.
Don't use direct merging to master / dev
Please use only pull request if you want merge your branch to dev

* Switch to parent branch `git checkout <parent branch name>`
* Check new commits in parent branch `git pull origin <parent branch name>`
* !Important! if new commits available you must merge/rebase PARENT branch to YOUR branch and go back to the point "Making changes"/"Make sure your changes works"
* If new commits not available you can push your changes `git push origin <your branch name>`
* Create your pull request using github web ui
* Delete local branch when pull request approved `git branch -d <your branch name>`
* Delete remote branch when pull request approved `git push origin :<your branch name>`
