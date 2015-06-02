var React = require('react'),
    $ = require('jquery')

var App = React.createClass({
  render: function () {
    return (
      <div> 'Edit this text' </div>
    )
  }
})

$(document).ready(function(){
  React.render(<App />, document.getElementById('container'))
})
