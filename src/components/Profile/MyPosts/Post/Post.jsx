import s from "./Post.module.css"

export default (props) => <div className={s.item}>
    <img src="https://avatars.mds.yandex.net/i?id=53b61d1daf55cee2a4e28892943cf627-4055263-images-thumbs&n=13"/>
    {props.message}
    <div>
        <label>{"Likes:"+props.likesCount}</label>
    </div>
</div>