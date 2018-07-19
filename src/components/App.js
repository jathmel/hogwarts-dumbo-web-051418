import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList.js'

class App extends Component {
  state = {
    clicked: false,
    hogs: hogs,
    filter: false
  }

  handleHogClick = (e) => {
    this.toggleList(e)
    this.changeState()
    this.changeStateFilter()
  }

  toggleList = (e) => {
    console.log(hogs.find(hog => hog.name === e.target.parentElement.dataset.name));
    console.log(e.target.parentElement.dataset.name);
    this.clickedHog = hogs.find(hog => hog.name === e.target.parentElement.dataset.name)
  }

  changeStateHogsName = () => {
    this.setState({
      hogs: this.sortHogsByName()
    })
  }

  changeStateHogsWeight = () => {
    this.setState({
      hogs: this.sortHogsByWeight()
    })
  }
  changeStateHogsFiltered = () => {
    this.setState({
      hogs: this.filterHogsByGreased()
    })
  }

  changeState = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }
  //needs work
  changeStateFilter = () => {
    this.setState({
      filter: !this.state.filter
    })
  }

  showList = () => {
    this.changeState()

  }
  sortHogsByName = () => {
    const sorted = hogs.sort((hog1, hog2 )=> {
      return hog1.name.localeCompare(hog2.name)
    })
    return sorted
  }
  sortHogsByWeight = () => {
    const sorted = hogs.sort((hog1, hog2 )=> {
      return hog2.weight - hog1.weight
    })
    return sorted
  }
  //needs work
  filterHogsByGreased = () => {
    console.log(this.state.filter)
    const filtered = this.state.filter ? (hogs.filter(hog => hog.greased)) : hogs
    return filtered
  }

  renderClickedHog = () => {
    return (
      <div onClick={this.showList} className='container'>
        <div className="pigTile">
          <img src={require(`../hog-imgs/${this.clickedHog.name.replace(/\s/g,'_').toLowerCase()}.jpg`)}/>
          <h1>{this.clickedHog.name}</h1>
          <h3>{this.clickedHog.specialty}</h3>
          <h3>{this.clickedHog.greased}</h3>
          <h3>{this.clickedHog.weight}</h3>
          <h3>{this.clickedHog['highest medal achieved']}</h3>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="App container">
          < Nav />
        <button onClick={this.changeStateHogsName}>Sort by Name</button>  <button onClick={this.changeStateHogsWeight}>Sort by Weight</button>  <button onClick={this.changeStateHogsFiltered}>Greased Hogs</button>
        { this.state.clicked ? this.renderClickedHog() : <HogList hogsList={this.state.hogs} toggleList={this.handleHogClick}/> }
      </div>
    )
  }
}

export default App;
