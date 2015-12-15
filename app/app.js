var hello = require('./src/hello.js');
var button = require('./dist/button.js');
var use_var = require('./dist/use-var.css');
var React = require('react');
var ReactDom = require('react-dom');

hello();

window.onload = function(){
    ReactDom.render(React.createElement(button, null), document.getElementById('remind'));
}


