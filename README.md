# react-sass-webpack-on-gulp
react,sass,webpack work on gulp

This is a demo or start kit for development based on react and sass.  It is well configured so that you can work from this right now.

## Prepare
Install all dependencies
```
npm install
```
If you meet errors when install browser-sync, try this
```
npm config set msvs_version 2012 -g
```
solution comes from [here](http://stackoverflow.com/questions/14278417/cannot-install-node-modules-that-require-compilation-on-windows-7-x64-vs2012)
## Files in app
Directory ***app*** has two sub directories, one is src which contains jsx,scss files. And another one is build which contains the processed files.

## Start the live reload server

```
npm run-script build
```
This will start a server, and every time you changed the code in src, the home page will be reloaded.
