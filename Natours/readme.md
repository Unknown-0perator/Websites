# NATOURS

## _Outdoors is where life happens_

Natours is a demo website for tour agency that built using CSS and HTML

## Tools and technologies used

- HTML
- CSS (Sass framework)
- Linea icons
- Google fonts
- Npm (To install Sass)
- Visual Studio Code (code editor)

## Key features

- Custome image outline
- Custome radio button
- Two-face cards

## Installation

To customize the Natours Download the codes from github
Install node and npm.
Install SASS.

```sh
npm install node-sass
```

Once done, you need to add the following script into package.json file.

```sh
"scripts": {
    "compile:sass": "node-sass sass/main.scss css/style.css -w"
  }
```

To use Sass, you need to run it.

```sh
npm run compile:sass
```

## Copyright

This project was designed during [Advanced CSS and Sass](https://www.udemy.com/course/advanced-css-and-sass/) and all credits go to original author **Jonas Schmedtmann**
