import React, { Component } from 'react';
import SideBar from './components/shared/SideBar/SideBar';
import HackerNews from './components/HackerNews/HackerNews'
import Reddit from './components/Reddit/Reddit'
import Medium from './components/Medium/Medium'
import { HashRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { increment, decrement, changeNum } from './redux/reducer';
import './App.css';
import e from 'express';

class App extends Component {
  constructor(){
    this.state = {
      countInput: 0,
    }
  }
  
  render() {
    return (
      <HashRouter>
        <div className='App'>
          <SideBar />
          <h1>{this.props.count}</h1>
          <button onClick={this.props.increment}>Increment</button>
          <button onClick={this.props.decrement}>Decrement</button>
          <input onChange={() => this.setState({ countInput: e.target.value })}/>
          <button onClick={() => this.props.changeNum(this.state.countInput)}>Change Count</button>
          <Switch>
            <Route path='/hacker-news' component={HackerNews} />
            <Route path='/medium' component={Medium} />
            <Route path='/reddit' component={Reddit} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    count: reduxState.count,
  }
}

const mapDispatchToProps = {
  increment,
  decrement,
  changeNum,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
