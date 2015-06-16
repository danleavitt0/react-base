import React from 'react'
import {AuthorInfo, CardContent, Comments} from 'lib/components'

export default class Card extends React.Component {
  getStyles () {
    var styles = {

    }
    return styles
  }
  render () {
    return (
      <div>
        <h1> </h1>
        <AuthorInfo />
        <CardContent />
        <Comments />
      </div>
    )
  }
}
