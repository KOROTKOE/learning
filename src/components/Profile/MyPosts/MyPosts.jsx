import React from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"

export default (props) =>{
    const postElements = props.posts.map(post=><Post message={post.post} likesCount={post.likesCount}/>)

    const newPostElement = React.createRef();

    const addPost = () => props.addPost(newPostElement.current.value)

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>
}