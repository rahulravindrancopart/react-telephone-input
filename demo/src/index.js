import React, {Component} from 'react'
import {render} from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RTI from '../../src/withStyles'

class Demo extends Component {
  render() {
    return <div>
      <h1>React Telephone Input Demo</h1>
      <MuiThemeProvider>
      <RTI
        defaultCountry="in"
        flagsImagePath="./images/flags.png"
      />
  </MuiThemeProvider>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
