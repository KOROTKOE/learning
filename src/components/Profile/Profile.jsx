import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default (props) => {
    return (
        <div>
        <ProfileInfo />
        <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    );
};
