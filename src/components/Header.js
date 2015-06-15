var React = require('react')

var Header = React.createClass({
  render: function () {
    return (
     <div> 
      Header 
      <button> Click button </button>
      <ul>
        <li> Cheese </li>
        <li> Milk </li>
        <li> Toast </li>
      </ul>
     </div>
    )
  }
})

module.exports = Header