# (Typescript) React + Redux + Router template

<img src="https://cdn-images-1.medium.com/max/800/1*wjlfZatDlTnqfgYJ9iKnKQ.png" width="300">

This project is a skeleton for building great front-end apps using React + Redux + Router + Sass preprocessor (scss). It includes Webpack as module bundler (also for hot reloading) + Thunk + Material UI + several libraries as redux-auth-wrapper for managing user auth and intl for internationalization or axios for http requests.


### Installation

Install the dependencies and devDependencies and start the dev server [the dev server](https://localhost:3002).

```sh
$ npm install
$ npm start
```

For production environments...

```sh
$ npm build
```


### Development

You can start building your app by creating .tsx components in the inner folder inside the src folder. You should wrap your components inside a page (there should be also a equivalent DTO and container for that page). You also need to create the actions + reducers for your pages and register them in the [IndexReducers.tsx](./src/reducers/IndexReducers.tsx) file.

You have a navigation example using Router + Redux actions available following the whole pattern in this example repo.


License
----
MIT

**Free Software, Hell Yeah!**