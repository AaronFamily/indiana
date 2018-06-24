import React, { Component } from 'react'
import axios from 'axios'

import {
    Input
} from 'antd';

const Search = Input.Search

export default class Home extends Component {
    componentDidMount () {
        axios.get('/vote/getSessionGroupList.shtml')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render () {
        return (
            <div>
                <Search
            placeholder = "input search text"
            onSearch = {
                value => console.log(value)
            }
            style = {
                {
                    width: 200
                }
            }
            /> <br/> <br/>
                <Search
            placeholder = "input search text"
            onSearch = {
                value => console.log(value)
            }
            enterButton
                /><br/> <br/>
                <Search
            placeholder = "input search text"
            enterButton = "Search"
            size = "large"
            onSearch = {
                value => console.log(value)
            }
            /></div>
        )
    }
}