# Summary
This is a ready to use boilerplate which encorporates [electron](https://github.com/electron/electron), [react](https://github.com/facebook/react) and [bootstrap](https://github.com/twbs/bootstrap).
[react-router](https://github.com/ReactTraining/react-router) is also used.

# Quick Start

1. Clone the repo

```
git clone https://github.com/RC-787/electron-react-bootstrap-boilerplate.git
```

2. Navigate to the newly created directory

```
cd my-project
```

3. Install dependencies

```
npm install
```

4. Start in development mode. This will open a electron window and render your react app

```
npm run electron-dev
```

# Project Structure

A very simple project structure has been used.

- main.js defines the entry point for the electron related code.
- public/index.html contains the html page that will be initially loaded. 
- src/index.js is the first javascript file that will be invoked. It will render the react app in the ``<div id="root">`` element in index.html