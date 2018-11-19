import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import {TextArray} from './textArray/TextArray';
import CardList from './components/CardList/CardList';




class App extends Component {
  constructor(){
    super();
    this.state = {
      textArray: TextArray,
      rdmArray: ""
    }
    
    }



  onRandomise = () => {
    let e = this.state.textArray;
    let i = e.sort(() => { return 0.5 - Math.random() });
    this.setState({
      rdmArray: i
    })
    console.log(this.state.rdmArray);
    
    

  }

  render() {
    return (
      <div> 
      <Header onRandomise={this.onRandomise}/> 
      <CardList textArray={this.state.textArray}/>
     
      </div>
    );
  }
}

export default App;
