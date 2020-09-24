/**
 * 下部的用户列表模块
 */
import React,{Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class UserList extends Component {

    state = {
        firstView: true,
        loading: true,
        users: null,
        error: null
    }

    componentDidMount() {
        PubSub.subscribe('name', (msg, data) =>{
            debugger
            const url = `https://api.github.com/search/users?q=${data}`
            console.log('发送ajax请求',url)
            //修改状态
            this.setState({
                firstView:false,
                loading: true
            })

            //使用ajax发送请求

            axios.get(url)
                .then((response) => {
                    console.log(response)
                    this.setState({ loading: false, users: response.data.items })
                })
                .catch((error)=>{
                    // debugger
                    console.log('error', error.response.data.message, error.message)
                    this.setState({ loading: false, error: error.message })
                })

        })
    }

    // async componentWillReceiveProps(nextProps) {
    //     let searchName = nextProps.searchName
    //
    //
    // }

    render() {
        if (this.state.firstView) {
            return <h2>Enter name to search</h2>
        } else if (this.state.loading) {
            return <h2>Loading result...</h2>
        } else if (this.state.error) {
            return <h2>{this.state.error}</h2>
        } else {
            return (
                <div className="row">
                    {
                        this.state.users.map((user) => (
                            <div className="card" key={user.html_url}>
                                <a href={user.html_url} target="_blank">
                                    <img src={user.avatar_url} style={{width: '100px'}} alt='user'/>
                                </a>
                                <p className="card-text">{user.login}</p>
                            </div>
                        ))
                    }
                </div>
            )
        }
    }
} 