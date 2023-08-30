import { NavLink } from 'react-router-dom';

function DialogItem (props) {
    return (
        <div className={"dialogs__name " + props.className}><NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink></div>
    );
}
export default DialogItem;