import React, { Component } from 'react'

import { TopHeader } from 'components/index'

import Banner from './Banner/index'

import Container from './Container/index'

export default class Home extends Component {
	render () {
		return (
			<div>
				<TopHeader></TopHeader>
				主页
				<Banner 
					onClick={ () => alert(1) }
				></Banner>
				<Container></Container>
			</div>
		)
	} 
}
