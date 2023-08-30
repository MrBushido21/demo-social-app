import React from 'react';
import '../Dialogs/dialogs.css'
import DialogItem from './DialogItem';
import Message from './Message';
import FormTextArea from './FormTextArea';


function Dialogs(props) {
return (
    <div className="dialogs">
        <h4>Dialogs</h4>
        <div className="dialogs__flexrow">
            <div className="dialogs__names">
                {props.dialogs.map( item => <DialogItem className={item.class} name={item.name} id={item.id}/>)}
            </div>
            <hr className='hr' />
            <div className="dialogs__messages">
                { props.messages.map( item => <Message className={item.class} name={item.name} message={item.message}/>)}
            </div>
        </div>
        <div className="dialogs__add-text">
            <FormTextArea {...props}/>
        </div>
    </div>
);
}
export default Dialogs;