// 上部的搜索模块

import React,{Component} from 'react'
import PubSub from 'pubsub-js'
export default class Search extends Component {


    search = () => {
        let name = this.nameInput.value
        PubSub.publish('name',name)
    }
    render() {


        return  (
            <div>
                <input type="text" placeholder='please the name you search'
                    ref={(input => this.nameInput=input)}
                />

                <button onClick={this.search}>Search</button>
            </div>
        )
    }
}