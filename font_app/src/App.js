import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {darkRedFontColor, redFontColor,
        darkOrangeFontColor, orangeFontColor,
        lightOrangeFontColor, yellowFontColor,
        lightGreenFontColor, greenFontColor,
        lightBlueFontColor, blueFontColor,
        purpleFontColor, blackFontColor,
        makeFontBigger, makeFontNormal, makeFontSmaller,
        makeLetterSpacingSmaller, makeLetterSpacingBigger} from './main.js';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios';
import Fonts from './components/Fonts'
import Test from './components/Test'

var API_KEY = 'AIzaSyAal522Umjhw1wrMMIk8C7tJFOM80306S4';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData:[],
      apiDataLoaded: false,
      activeButton: false,
      //color_none: true,
    }
    //this.changeFontColor = this.changeFontColor.bind(this);
  }

    componentDidMount() {
      axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`)
      .then(res => {
        const fonts = res.data.items;
        console.log(res.data.items);
        console.log(fonts[5]);
        this.setState({
          apiData:fonts,
          apiDataLoaded: true
        })
      })
    }

    handleDarkRed() {
      darkRedFontColor()
      console.log('clicked again');
    }

    handleRed() {
      redFontColor()
      console.log('clicked again');
    }

    handleDarkOrange() {
      darkOrangeFontColor()
      console.log('clicked again');
    }

    handleOrange() {
      orangeFontColor()
      console.log('clicked again');
    }

    handleLightOrange() {
      lightOrangeFontColor()
      console.log('clicked again');
    }

    handleYellow() {
      yellowFontColor()
      console.log('clicked again');
    }

    handleLightGreen() {
      lightGreenFontColor()
      console.log('clicked again');
    }

    handleGreen() {
      greenFontColor()
      console.log('clicked again');
    }

    handleLightBlue() {
      lightBlueFontColor()
      console.log('clicked again');
    }

    handleBlue() {
      blueFontColor()
      console.log('clicked again');
    }

    handlePurple() {
      purpleFontColor()
      console.log('clicked again');
    }

    handleBlack() {
      blackFontColor()
      console.log('clicked again');
    }

    handleBigger() {
      makeFontBigger(5)
      console.log('clicked again');
    }

    handleNormal() {
      makeFontNormal(5)
      console.log('clicked again');
    }

    handleSmaller() {
      makeFontSmaller(5)
      console.log('clicked again');
    }

    handleSpacingSmaller() {
      makeLetterSpacingSmaller()
    }

    handleSpacingBigger() {
      makeLetterSpacingBigger()
    }

    renderFonts() {
      if(this.state.apiDataLoaded)
        return (
            <div className="fonts-wrapper">
              {
                this.state.apiData.map(data => {
                  return (
                    <Fonts key={data.id} name={data.family} category={data.category} changeFontColor={this.changeFontColor}/>
                  )
                })
              }
            </div>
        )
        else
          return <p> Loading ... </p>
    }


  render() {

    return (

      <Router>
      <div className="App">

      <div className="text-editors">
        <div className="editors-positon">
          <h1>FontEditor</h1>
          <h3>with google fonts</h3>
            <div className="color-wrapper">
              <button className="colors" style={{background: '#9E0000'}} onClick={this.handleDarkRed.bind(this)}></button>
              <button className="colors" style={{background: 'red'}} onClick={this.handleRed.bind(this)}></button>
              <button className="colors" style={{background: '#F54B1E'}} onClick={this.handleDarkOrange.bind(this)}></button>
              <button className="colors" style={{background: '#F5852B'}} onClick={this.handleOrange.bind(this)}></button>
              <button className="colors" style={{background: '#FFCB3C'}} onClick={this.handleLightOrange.bind(this)}></button>
              <button className="colors" style={{background: 'yellow'}} onClick={this.handleYellow.bind(this)}></button>
              <button className="colors" style={{background: '#D3D940'}} onClick={this.handleLightGreen.bind(this)}></button>
              <button className="colors" style={{background: '#3AA034'}} onClick={this.handleGreen.bind(this)}></button>
              <button className="colors" style={{background: '#50A5D4'}} onClick={this.handleLightBlue.bind(this)}></button>
              <button className="colors" style={{background: '#4044D4'}} onClick={this.handleBlue.bind(this)}></button>
              <button className="colors" style={{background: '#3E1F6B'}} onClick={this.handlePurple.bind(this)}></button>
              <button className="colors" style={{background: 'black'}} onClick={this.handleBlack.bind(this)}></button>
            </div>

            <div className="font-wrapper">
              <div className="font-editors">
              <p>Font Size</p>
                <button className="text-edit" onClick={this.handleSmaller.bind(this)}> - </button>
                <button className="text-edit" onClick={this.handleNormal.bind(this)}> A<span>A</span> </button>
                <button className="text-edit" onClick={this.handleBigger.bind(this)}> + </button>
              </div>

              <div className="font-editors">
              <p>Letter Spacing</p>
                <button className="text-edit" onClick={this.handleSpacingSmaller.bind(this)}>A\V </button>
                <button className="text-edit" onClick={this.handleSpacingBigger.bind(this)}>A  \  V</button>
              </div>
            </div>
        </div>
      </div>

        {this.renderFonts()}
      </div>
      </Router>
    )
  }
}

export default App;
