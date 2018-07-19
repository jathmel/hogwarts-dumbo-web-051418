import React from 'react'

export default class Hog extends React.Component{

  render(){
    return (
      <div onClick={this.props.toggleList} data-name={this.props.hog.name} className="ui eight wide column pigTile">
        <img src={require(`../hog-imgs/${this.props.hog.name.replace(/\s/g,'_').toLowerCase()}.jpg`)}/>
        <p> {this.props.hog.name} </p>
      </div>
  )

  }

}
