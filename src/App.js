//every page routed will have this as the template
import React from 'react'
import Nav from './components/Navigation/Navigation.js'
import Footer from './components/Footer/Footer.js'


export default class App extends React.Component {

  render() {
    return(
        <div>
        <Nav></Nav>
        <div>This site is still under construction but the bugs won't bite your browser. I promise!</div>
          {this.props.children}
        <Footer></Footer>
        </div>
    )
  }
}
