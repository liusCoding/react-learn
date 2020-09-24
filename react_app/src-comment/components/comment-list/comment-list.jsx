import React,{Component} from 'react'
import CommentItem from  '../comment-item/comment-item'
import PropTypes from 'prop-types'
import './commentList.css'
export default class CommentList  extends Component {

    static propTypes = {
        comments: PropTypes.array.isRequired,
        deleteComment: PropTypes.func.isRequired
    }


    render() {

        const {comments,deleteComment} = this.props
        const display = comments.length > 0 ? 'none':'block'
        return  (
            <div className='col-md-8'>
                <h3 className='reply'>评论回复：</h3>
                <h2 style={{display:display}}>暂时评论，点击左侧添加评论！！</h2>

                <ul className='list-group'>
                    {
                        comments.map((comment,index) => {
                            console.log(comment)
                            return <CommentItem comment={comment} key={index} index={index} deleteComment={deleteComment}/>
                        })
                    }

                </ul>


            </div>
        )
    }
}