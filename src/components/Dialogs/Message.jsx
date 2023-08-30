function Message(props) {
    return (
        <div className={"dialogs__message-box " + props.className}>
            <div className="dialogs__persone">
                <div className="dialogs__persone-ava"></div>
                <div className="dialogs__persone-name">{props.name}</div>
            </div>
            <div className="dialogs__message">{props.message}</div> 
        </div>
    );
}
export default Message;