Here's a little guide on how to run a full stack application


![contact_list_full_stack_app](https://user-images.githubusercontent.com/42359973/102006672-cd5a5900-3cf0-11eb-92e9-7c1eb8d04272.gif)


### Requirements: 
⚠️ Make sure you are using node version 8. Check your node version by running:
```
$ node -v
```
If version 8 is not the version you're using, simply:
```
$ nvm install 8
```
### Install the packages:
```
$ npm install
```
### Run 
```
$ npm rebuild node-sass
```
### Start the webpack server with live reload:
- `$ npm run start` for windows, mac, linux or Gitpod.
- `$ npm run c9` for Cloud 9 Users.

### Styles
You can update the `styles/index.scss` or create new `.scss` files inside `styles/` and import them into your current scss or js files depending on your needs.

### Components
Add more files into your `./src/js/component` or styles folder as you need them and import them into your current files as needed.

### Views (Components)
Add more files into your `./src/js/views` and import them in `./src/js/layout.jsx`.

### Context
This boilerplate comes with a centralized general Context API. The file `./src/js/store/flux.js` has a base structure for the store, we encourage you to change it and adapt it to your needs.

React Context [docs](https://reactjs.org/docs/context.html)

The `Context.Provider` is already set, you can use the `Context.Consumer` to get the `store` and `actions` from the Context. Check `/views/demo.jsx` to see a demo.

### Publish your website!

This boilerplate is 100% compatible with the free github pages hosting.
To publish your website you need to push your code to your github repository and run the following command after:
```sh
$ npm run deploy
```
Note: You will need to [configure github pages for the branch gh-pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages)

# P.S
⚠️ You might need to delete a contact twice in order for it to actually be gone if you're only running 
the front end of the project

If you're running both front and AND back end, 

⚠️ keep in mind,  that entering the same information twice 
will give you a duplicate entry error on the back end

Before running the front end of the project, 

⚠️ make sure that you have the correct URL and endpoints to addContact, 
deleteContact and updateContact in *flux.js* file

### If you need more information, please see the instructions [here](https://projects.breatheco.de/d/contact-list#readme)

