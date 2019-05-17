## Forward / Parent Project

This project is a wrapper / modification on the Phaser 3 Typescript [project](https://github.com/digitsensitive/phaser3-typescript) created and maintained by [digitsensitive](https://github.com/digitsensitive) in order to simplify the process of developing a Phaser mobile game.

That project has much more information, code examples, cheatsheets, and in general a large amount of extra resources about actually creating a game in Phaser 3 that you will not find in this repo.

After cloning and configuring the project, be sure to check out the [parent](https://github.com/digitsensitive/phaser3-typescript) repository for your development ease.

# Cordova, Phaser 3 and TypeScript

[Phaser](https://github.com/photonstorm/phaser) is a wonderful, fast and free open source HTML5 game framework.<br />
[Cordova](https://cordova.apache.org/) is a cross-platform mobile development framework that packages web-apps for iOS, Android, etc.<br />

## Getting started

### Prerequisites
Download and install npm with Node.js @ https://nodejs.org/en

Install Cordova utilizing npm after installation above
```
npm install -g cordova
```

### Installing

Select a folder, navigate to it, and clone this repository
with this command-line:

```
git clone https://github.com/evanlanglais/cordova-phaser3-typescript.git
```

Install the dependencies with this command-line:

```
npm install
```

### Building and Running

Perform a quick build (bundle.js) and start server primarily for development purposes:

```
npm run dev
```

Perform a production build and package your game to all Cordova platforms:

```
npm run build
```

## TypeScript Configuration

### tsconfig.json

The following `Compiler Options` have been set in the `tsconfig.json` file:

| Option | Value     |
| :------------- | :------------- |
| target       | ES2016 |
| module       | CommonJS |
| sourceMap    | true |
| noImplicitAny| true [WIP] |
| strict       | true [WIP] |

You can see the complete list of the available options at [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).
Interesting read about [setting up a nodejs-project](https://codeburst.io/tips-for-setting-up-a-typescript-nodejs-project-5d1c48dc1a2d).
