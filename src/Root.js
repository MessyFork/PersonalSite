//every page routed will have this as the template
import React from 'react'
import style from './assets/css/global.scss'
import icon from './assets/images/favicon.ico'


export default class Root extends React.Component {

  render() {
    return(
      <html>
        <head>
          <link rel="stylesheet" href="/styles.css"/>
          {/* magic reloading from webpack dev */}
          <script src="http://localhost:8080/webpack-dev-server.js"></script>
          <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"/>
          <link rel="icon" href="/favicon.ico?v=2"/>
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
