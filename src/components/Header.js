import React from 'react'
import Login from './Login'

export default class Header extends React.Component {

  getStyles () {
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
    return styles
  }

  render () {
    var styles = this.getStyles()
    return (
     <div style={styles.base}>
       <h1 style={styles.header}>Header</h1>
       <Login />
     </div>
    )
  }

}
