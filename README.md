# Ikon

Scripts to build webfont icons.

## Install

```sh
npm install --save-dev ikon
```

## Configuration

You can modify the default configuration using a file called `.ikonrc` at root of your project. Take a look at configuration example file:

```json
{
  "dest": "./public/assets/fonts",
  "fontName": "iconfont-regular",
  "cssDest": "./public/assets/styles/icons.css",
  "cssTemplate": "./lib/templates/icons.css",
  "templateOptions": {
    "classPrefix": "i--",
    "baseSelector": ".i"
  }
}
```
