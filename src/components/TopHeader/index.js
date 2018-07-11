import React, { Component } from 'react'

import './header.css'

class TopHeader extends Component{
  constructor () {
    super()

    this.cll = '陈琳琳'
    this.state = {
      list: []
    }
  }

  componentDidMount () {
    this._getList()
  }

  _getList () {
    
    setTimeout(() => {
      const result = {
        code: 1000,
        list: [
          {title: '第一个'},
          {title: '第二个'},
          {title: '第三个'}
        ]
      }

      console.log(this)

      this.setState({list: result.list})
    }, 2000)
  }

  triggerClick (title) {
    alert(title)
  }

  _forList () {
    console.log(this.state.list)
    return this.state.list.map((item, index) => {
      return <div className="header" key={index} onClick={ (e) => this.triggerClick(item.title) }>{ item.title }</div>
    })
  }

  render () {
    return (
      <div>
        { this._forList() }
      </div>
    )
  }
}

export default TopHeader