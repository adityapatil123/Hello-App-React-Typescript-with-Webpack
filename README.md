# Hello-App-using-React-Typescript-with-Webpack
Simple Hello app using React Typescript with 2 components Input and Output

## Prerequisites:
- npm
- React.js
- Chrome/Mozilla browser

## Usage:
***We will solve this in 2 steps:***

## Step 1: Simple build using Webpack and Runnning the app
- Make directory/folder for the app and create files, **webpack.config.js** & **index.html**
```bash
$ npm init -y
```
npm i react react-dom
which will create **package.json** file with the default settings. This concludes the basic setup of the project.
In **webpck.config.js**
```javascript
module.exports = {
  entry: "",
  output: {},
  module: {},
  plugins: []
}
```
- Add a file to entry called **index.tsx** from the src folder like so **‘./src/index.tsx’**.Here,'.tsx' for React+Typescript.
- Also in the output, let’s put everything in a folder called **build** which will export using path, and collect all the combined js files into a **bundle.js**.
In **webpck.config.js**
```javascript
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {},
  plugins: []
};
```
In **index.tsx**
```javascript
import * as React from "react";
import * as ReactDOM from "react-dom";

const ROOT = document.querySelector(".container");

ReactDOM.render(<h1>Hello</h1>, ROOT);
```
In **index.html**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>React Typescript</title>
  </head>
  <body>
    <div class="container"></div>
    <script src="/bundle.js"></script>
  </body>
</html>
```
### npms installation:
Now we need to install all the npms we’ve referenced.
1. For React and React-DOM:
```bash
$ npm i react react-dom
```
2. For Webpack libraries as dev dependencies:
```bash
$ npm i webpack webpack-dev-server -D
```
3. For typescript and loader for reading it:
```bash
$ npm i typescript awesome-typescript-loader -D
```
4. By default our React installations don’t have information about what types the methods are in the packages,Hence:
```bash
$ npm i @types/react @types/react-dom -D
```
- Create **tsconfig.json** which tells webpack where to direct its search for typescript files,where:
```json
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "jsx": "react",
    "module": "commonjs",
    "noImplicitAny": true,
    "outDir": "./build/",
    "preserveConstEnums": true,
    "removeComments": true,
    "sourceMap": true,
    "target": "es5"
  },
  "include": [
    "./src/**/*"
  ]
}
```
- The final edit needed is to update the package.json file by replacing test in scripts with this line;
```json
"start": "webpack-dev-server"
```
- If you want to benefit from hot reloading from provided by the webpack-dev-server or if you want to change the file name,instead of **bundle.js** in **index.html**, you can have plugin for it.
-For installing plugin:
```bash
$ npm i html-webpack-plugin -D
```
- For debugging at browser:
```bash
$ npm i source-map-loader -D
```
- And,we have to resolve extensions like **.js, .ts, .tsx**
- Hence, finally **webpack.config.js** will look like:
```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  }
};

```
### Run the app on terminal using:
```bash
$ npm start
```
And Navigate to **localhost/8080** on browser.If you see 'Hello' on screen, then congrats,you did it.

## Step 2: Hello User App with 2 components, Input and output
- In **index.tsx**:
```javascript
import App from "./App";
```
And instead of 'Hello' header
```javascript
ReactDOM.render(<App />, ROOT);
```
- Create **App.tsx** file and **components** folder
- In **components**,create **InputText.tsx** and **HelloOutput.tsx** files ( 2 components )
* In **App.tsx**:
  * App is nothing but a parent component of 2 components.Render method renders the react-dom.
  * **HelloOutput** from outputMarkup will only bee there if **state.name** changed from "NoName". name and handleClick are the properties of **InputText** Component, while name is the property of **HelloOutput.tsx**
  
- We are using 2 components, we have to get value from one and print to another.But how can we access that value.Answer is through Parent.Hence we have lift the state of child level to parent level.You can use 'Redux' for state management while having complex applications.
  
* In **src/InputText.tsx** :
  * Create and export interface of props **InputTextProps** with members as 'name' and 'handleClick'
  * Use **nameRef** as html ref for having user input
  ```js
  onClick={() => this.props.handleClick(this.nameRef.current.value)}
  ```
  * onClick property will call the function of parent Component or the property of itself using the input ref value.
  
* In **src/HelloOutput.tsx** :
  * Create and export interface of props **HelloOutputProps** with member as 'name'
  * Print the 'Hello $User' message like
  ```js
  Hello {this.props.name.toUpperCase()}
  ```
  * 'name' is state member of parent Component, hence **this.props.name**
  
## Run:
- Run the app using **npm start** as earlier step.
- Navigate to **localhost/8080**
- Type the desired name in input box and find the 'Hello $User' msg for it.
