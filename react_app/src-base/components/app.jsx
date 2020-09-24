import React,{Component} from 'react'
import logo from '../logo.svg'

export default class App extends Component {
    render() {
        return  (
            <div>
                <img src={logo} className='logo' alt="logo"/>

                <p className='title'>
                    我的第一个React 组件
                </p>
            </div>
        ) 
    }
} 