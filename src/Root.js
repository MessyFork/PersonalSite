//every page routed will have this as the template
import React from 'react'
import style from './assets/css/global.scss'
import icon from './assets/images/fav.ico'


export default class Root extends React.Component {

  render() {
    return(
      <html>
        <head>
          <link rel="stylesheet" href="/styles.css"/>
          {/* magic reloading from webpack dev */}
          <script src="http://localhost:8080/webpack-dev-server.js"></script>
          <link rel="icon" href="/fav.ico"/>

        </head>
        <body>
            <div id='outlet' className="container">
                  {this.props.children}
            </div>
            <script src="/bundle.js"></script>
        </body>
      </html>
    )
  }
}
