//every page routed will have this as the template
import React from 'react'


export default class App extends React.Component {

  render() {
    return(
        <div>
          {this.props.children}
        </div>
    )
  }
}
