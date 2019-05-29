# Hello-App-using-React-Typescript-with-Webpack
Simple Hello app using React Typescript with 2 components Input and Output

## Prerequisites:
- npm
- React.js
- Chrome/Mozilla browser

## Usage:
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
- Add a file to entry called **index.tsx** from the src folder like so **‘./src/index.tsx’**.Here,'.tsx' for React+Typescript
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
## npms installation:
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
