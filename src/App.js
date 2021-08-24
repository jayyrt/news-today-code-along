import React, { Component } from 'react';
import SideBar from './components/shared/SideBar/SideBar';
import HackerNews from './components/HackerNews/HackerNews'
import Reddit from './components/Reddit/Reddit'
import Medium from './components/Medium/Medium'
import { HashRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { increment, decrement, deposit, changeNum } from './redux/reducer';
import { getCharacters, setLoading } from './redux/reducerTwo';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state = {
      countInput: 0,
    }
  }

  componentDidMount(){
    this.props.setLoading(true);
    axios.get('https://swapi.dev/api/people')
    .then((res) => {
      this.props.getCharacters(res.data.results);
      this.props.setLoading(false);
    })
  }
  
  render() {
    return (
      <HashRouter>
        <div className='App'>
          <SideBar />
{/*          <h1>{this.props.count}</h1>
          <button onClick={this.props.increment}>Increment</button>
          <button onClick={this.props.deposit}>Deposit</button>
          <button onClick={this.props.decrement}>Decrement</button>
          <input onChange={(e) => this.setState({ countInput: e.target.value })}/>
    <button onClick={() => this.props.changeNum(this.state.countInput)}>Change Count</button>*/}
      this.props.loading 
      ? <h1>loading...</h1> 
      : (<ul>{this.props.characters.map(char => <li>{char.name}</li>)}</ul>)
    <button onClick={this.props.getCharacters}>get characters</button>
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
    count: reduxState.reducer.count,
    dollars: reduxState.reducer.dollars,
    characters: reduxState.reducerTwo.characters,
    loading: reduxState.reducerTwo.loading,
  }
}

const mapDispatchToProps = {
  increment,
  decrement,
  deposit,
  changeNum,
  getCharacters,
  setLoading,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
