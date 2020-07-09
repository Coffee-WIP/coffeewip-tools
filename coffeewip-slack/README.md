<p align="center">
  <img src="./assets/banner.jpg" width="500" />
  <br /> <br /> <br />
</p>

<h1 align="center">CoffeeWIP Slack Library</h1>

<p align="center">🎓 This repository contains examples that I have done for my own preparation for the NodeJS certification exam - Application Developer (JSNAD).</p>

<p align="center">This content is not official from the OpenJS Foundation or from NodeJS.</p>

<p align="center">
  <a title="MIT License" href="LICENSE.md">
    <img src="https://img.shields.io/github/license/gridsome/gridsome.svg?style=flat-square&label=License&colorB=6cc24a">
  </a>
  <a title="Twitter: CoffeeWIP" href="https://twitter.com/CoffeeWIP">
    <img src="https://img.shields.io/twitter/url?color=1991DA&label=Twitter%20%40CoffeeWIP&logo=twitter&logoColor=FFFFFF&style=flat-square&url=https%3A%2F%2Ftwitter.com%2FCoffeeWIP">
  </a>  
  <br />
  <br />
</p>

## 🔖 Description

🔌 JavaScript Library for integrate with the Slack Rest API. You can get information from the channels and much more.

## ✅ Prerequisites

In order to work with this project, your local environment must have at least the following versions:

* NodeJS Version: 13.xx
* NPM Version: 6.12.0

## 📐 How to work with this project

You have to do the following steps to be able to work with this project.

### 1️⃣ Install NodeJS Dependencies

```bash
# Install npm dependencies
$npm i
```

### 2️⃣ Build this Project

```bash
# Build with TypeScript
$npm build
```

### 3️⃣ Unit Testing

```bash
# Run unit testing
$npm test
```

## ⚡️ Run

For use this library, you need generate a Slack Application, activate it in your Workspace and generate a Bot / User Token. 

You can see more information about Token [here](https://api.slack.com/legacy/oauth#using_tokens).

### Example

```js
import Slack from 'coffeewip-slack';

const slack = new Slack('YOUR TOKEN');

(async () => {
  try {
    const result = await slack.usersList();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
})();
```

## 📂 Code scaffolding

```any
/
├── assets 🌈               # Images Sources.
|   └── ...                 # ...
|   |
├── doc
|   ├── qac 🔰              # Quality Assurance Code.
|   |   └── ...             # ...
|   |
├── src                     # Main folder application with code.
|   └── ...   
└── ...
```

## ⛽️ Review and Update Dependences

For review and update all npm dependences of this project you need install in global npm package "npm-check-updates" npm module.

```bash
# Install and Run
$npm i -g npm-check-updates
$ncu
```

## Happy Code

Created with JavaScript, lot of ❤️ and a few ☕️

## This README.md file has been written keeping in mind

- [GitHub Markdown](https://guides.github.com/features/mastering-markdown/)
- [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
