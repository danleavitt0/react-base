var React = require('react')
var ThemeManager = require('material-ui/lib/styles/theme-manager')()
import {AppBar, Avatar, Card, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui'
import {ColumnLayout} from 'react-components-9dots'
import Posts from '../utils/Posts'

var styles = {
  card: {
    width: 350,
    margin: 20,
    backgroundColor: 'lemonchiffon'
  },
  header: {
    backgroundColor: 'lightblue'
  },
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
}

var App = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  },

  render: function () {
    var posts = Posts.map(function(post){
      return (
        <Card style={styles.card}>
          <div>
            <CardHeader title={post.author} subtitle={post.time} avatar={<Avatar>{post.author[0]}</Avatar>} />
            <CardMedia>
              <img src={post.image} />
            </CardMedia>
            <CardTitle title={post.title} subtitle={post.subtitle} />
            <CardText>
              {post.content}
            </CardText>
          </div>
        </Card>
      )
    })
    return (
      <div style={styles.container}>
        <AppBar title='example' />
        <ColumnLayout cards={posts}/>
      </div>
    )
  }

})


React.render(<App/>, document.body)
