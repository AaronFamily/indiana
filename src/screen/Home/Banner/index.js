import React from 'react'


export default class Banner extends React.Component{
  render () {
    return (
      <div onClick={ () => this.props.onClick() }>
      点击
      </div>
    )
  }
}