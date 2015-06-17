import React from 'react'
var ThemeManager = require('material-ui/lib/styles/theme-manager')()
import {Header, AuthorInfo, Login} from 'lib/components'

var mountNode = document.body

class App extends React.Component {

  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  render () {
    return (
      <div>
        <Header />
        <AuthorInfo author='steve' time='whenever' />
      </div>
    )
  }

}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
}

React.render(<App/>, mountNode)
