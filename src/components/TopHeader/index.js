import React,{Component} from 'react'
import { Menu, Icon, Button, Select } from 'antd'

import './header.less'
import china from './img/china.png'
import usa from './img/usa.png'
import logo from './img/logo.svg'

const Option = Select.Option;

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

const menu = (
  <Menu>
    <Menu.Item key="0">
      中文<img src={china} alt=""/>
    </Menu.Item>
    <Menu.Item key="1">
      英文<img src={usa} alt=""/>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

export default class TopHeader extends Component {
  constructor () {
    super()

    this.state = {
      current: 'mail'
    }
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    })
  }

  handleChange (value) {
    console.log(`selected ${value}`)
  }

  render() {
    return (
      <div className="header">
        
        <div className="logo">
          <img src={logo} alt=""/>
        </div>
        <Menu
          style={ {background: 'transparent', border: 0, flex: 1} }
          className="menu"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="mail">
            <Button type="primary">开始玩</Button>
          </Menu.Item>
          <Menu.Item key="app">
            <Icon type="appstore" />免费获取ETH
          </Menu.Item>
          <Menu.Item key="aaa">
            <Icon type="mail" />常见问题
          </Menu.Item>
          <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">智能合约</a>
          </Menu.Item>
        </Menu>
        <Select defaultValue="china" style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="china">中文<img src={china} alt=""/></Option>
          <Option value="usa">英文<img src={usa} alt=""/></Option>
        </Select>
      </div>
    )
  }
}
