import React,{Component} from 'react'
import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'

export default class App extends Component {

    static propTypes = {

    }


    componentDidMount() {
        //模拟异步获取数据

        setTimeout(()=>{
            const comments = [
                {
                    username: "Tom",
                    content: "ReactJS好难啊!",
                    id: Date.now()
                },
                {
                    username: "JACK",
                    content: "ReactJS还不错!",
                    id: Date.now() + 1
                }
            ]

            this.setState({comments})
        },1000)
    }

    state = {
        comments: []
    }

    addComment= (comment) => {
        let {comments} = this.state
        comments.unshift(comment)
        this.setState({comments})
    }



    deleteComment = (index) => {
        let {comments} = this.state

        comments.splice(index, 1)
        this.setState({comments})
    }


    render() {
        return  (
            <div>
                <header className='site-header jumbotron'>
                    <div className='container'>
                        <div className='row'>
                            <h1>请发表对React的评论</h1>
                        </div>
                    </div>
                </header>

                <div className='container'>
                    <CommentAdd addComment={this.addComment}/>
                    <CommentList comments={this.state.comments} deleteComment={this.deleteComment}/>

                </div>
            </div>
        )
    }
}