require('./dist/use-var.css');
require('./dist/compute.css');

var hello = require('./dist/hello.js');
var button = require('./dist/button.js');

var React = require('react');
var ReactDom = require('react-dom');

hello();

window.onload = function(){
    ReactDom.render(React.createElement(button, null), document.getElementById('remind'));
}


