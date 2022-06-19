import React from "react";
import s from "./Dialog.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export default (props) =>{
    const dialogsElelements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id = {dialog.id}/>);
    const messagesElelements = props.state.messages.map(message=><Message message={message.message}/>)
    const textMessageElement = React.createRef()
    const addMessage = () => {
        alert(textMessageElement.current.value)
    }

    return <div className={s.dialogs}>
    <div className={s.dialogItems}>
        {dialogsElelements}
    </div>
    <div className={s.messages}>
        {messagesElelements}
    </div>
    <div className={s.addMessage}>
        <textarea ref={textMessageElement}></textarea>
        <button onClick={addMessage}>AddMessage</button>
    </div>
</div> 
}