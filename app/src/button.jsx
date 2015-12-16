var React = require('react');
var ReactDom = require('react-dom')

var Button = React.createClass({

  render: function () {
    return (
      <div onClick={this.props.clickHandle}> { this.props.children || "This is a button" }
      </div>
    );
  }
});

module.exports = Button;
