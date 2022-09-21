import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    state = {
        inp:''
    }
    buttonHandler =()=>{
        this.setState({
            inp:'parentComponent'
        })
    }
  render() {
    return (
      <div>
        <h1>2.</h1>
        ParentComponent
        <p>{this.state.inp}</p>
        {console.log('parentComponent')}
        <ChildComponent val='childcomponent'/>
        <button onClick={this.buttonHandler}>click to check</button>
      </div>
    )
  }
}

export default ParentComponent