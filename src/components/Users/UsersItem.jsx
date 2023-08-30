import './users.css'
import userAva from '../../img/userIcon.png'
import { NavLink } from 'react-router-dom';

function UsersItem(props) {
    return (
        <div className="users__item">
            <div className="item-profile">
                <NavLink to={"/profile/" + props.id} >
                    <img src={props.users.photos.small == null ? userAva : props.users.photos.small}
                        className="user-icon-profile" alt="" />
                </NavLink>
                {props.followed       
                ? <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => {
                    props.followUnfollowThunkCreator(props.id, "delete", props.unfollow)
                
                }}>Unfollow</button> 
                : <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => {
                    props.followUnfollowThunkCreator(props.id, "post", props.follow)
                    }}>Follow</button> }  
            </div>
            <div className="item-user-info">
                <div className="item-name-box">
                    <div className="user-name">{props.name}</div>
                    <div className="user-status">{props.status}</div>
                </div>
                <div className="item-location-box">
                    <div className="user-location">{"props.country"}</div>
                    <div className="user-location">{"props.city"}</div>
                </div>
            </div>
        </div>
    );
}

export default UsersItem