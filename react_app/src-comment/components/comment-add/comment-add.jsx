import React,{Component} from 'react'
import PropTypes from 'prop-types'
export default class CommentAdd extends Component {
    static propTypes = {
        addComment: PropTypes.func.isRequired
    }

    state = {
        username: '',
        content: ''

    }

    changeUserName = (event) => {
        let username  = event.target.value;
        this.setState({username})
    }

    changeContent = (event) => {
        let content = event.target.value
        this.setState({content})
    }

    addComment = () => {
        //根据输入的数据创建评论对象

        let {username,content} = this.state
        let comment =  {username,content}

        //添加到comments中，更新state
        this.props.addComment(comment)

        //清除输入的数据
        this.setState({
            username: '',
            content: ''
        })
    }

    render() {
        return  (
            <div className='col-md-4'>
                <form className='form-horizontal' action="">
                    <div className='form-group'>
                        用户名
                        <input type="text" className='form-control' placeholder='用户名'
                               value={this.state.username} onChange={this.changeUserName}
                        />

                        <div className='form-group'>
                            评论内容

                            <textarea className='form-control'    rows="6"
                                placeholder='评论内容' value={this.state.content} onChange={this.changeContent}
                            ></textarea>
                        </div>


                        <div className='form-group'>
                            <div className='col-sm-offset-2 col-sm-10'>

                                <button type='button' className='btn btn-default pull-right' onClick={this.addComment}>
                                    提交
                                </button>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        ) 
    }
} 