var React = require('react')

var Header = React.createClass({displayName: "Header",
  render: function () {
    return (
     React.createElement("div", null, 
      "Header",  
      React.createElement("button", null, " Click me ")
     )
    )
  }
})

module.exports = Header