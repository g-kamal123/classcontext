import React, { Component } from 'react'

export class ChildComponent extends Component {
  render() {
    return (
      <div>{this.props.val}
      {console.log(this.props.val)}
      </div>
    )
  }
}
export default React.memo(ChildComponent)