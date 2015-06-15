var React = require('react')
var Radium = require('radium')
var Login = require('lib/components/Login')

var Header = React.createClass({

  render: function () {
    return (
     <div style={styles.base}>
       <h1 style={styles.header}>Header</h1>
       <Login />
       <input></input>
     </div>
    )
  }

})

var styles = {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 3px rgba(0,0,0,0.13)',
    padding: 20,
    backgroundColor: 'lightblue',
    color: 'white'
  },
  header: {
    flex: 1,
    margin: 0
  }
}

module.exports = Radium(Header)
