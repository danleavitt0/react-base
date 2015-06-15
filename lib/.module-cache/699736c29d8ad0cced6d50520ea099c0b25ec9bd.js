var React = require('react')

var Header = React.createClass({displayName: "Header",
  render: function () {
    return (
     React.createElement("div", null, 
      "Header",  
      React.createElement("button", null, " Click button "), 
      React.createElement("ul", null, 
        React.createElement("li", null, " Cheese "), 
        React.createElement("li", null, " Milk "), 
        React.createElement("li", null, " Toast ")
      )
     )
    )
  }
})

module.exports = Header