import { renderTree } from "../render";

const state = {
    profilePage:{
        posts:[
            {id:1, post:"hehe", likesCount:21},
            {id:2, post:"haha", likesCount:2},
            {id:3, post:"huhu", likesCount:1},
            {id:4, post:"xexe", likesCount:0}
        ],
    },
    dialogsPage:{
        dialogs:[
            {id:1,name:"Toch"},
            {id:2,name:"Sasha"},
            {id:3,name:"Andrey"}
        ],
        messages:[
            {id:1,message:"Hi"},
            {id:2,message:"Hello"},
            {id:3,message:"Good morning"}
        ]
    }
}

export const addPost = (postMessage) => {
    const newPost = {
        id:5,
        post:postMessage,
        likesCount:0
    };

    state.profilePage.posts.push(newPost);
    renderTree(state)
}

export default state;