import React from 'react'
import Hog from './Hog.js'

export default class HogList extends React.Component{

  renderHogs = () => {
    return this.props.hogsList.map((hog, idx) => <Hog key={idx} name={hog.name} hog={hog} toggleList={this.props.toggleList} /> )
  }

  render(){
      return (
        <div>
           {this.renderHogs()}
        </div>
      )
  }

}
