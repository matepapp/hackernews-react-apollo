import React, { Component } from 'react'

class Link extends Component {
  render() {
    const { description, url } = this.props.link
    const title = `${description} (${url})`
    return (
      <div>
        <div>{title}</div>
      </div>
    )
  }
}

export default Link
