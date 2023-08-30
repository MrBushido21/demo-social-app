import Paginator from "./Paginator";
import UsersItem from "./UsersItem";
import './users.css'
function Users (props) {
    return (
        <div className="Users">
            <h4>Users</h4>
            <div className="users__items">
                {props.users.map( item => 
                <UsersItem
                key={item.id} name={item.name} id={item.id} followed={item.followed} follow={props.follow} 
                unfollow={props.unfollow} users={item}
                status={item.status} country={item.country} city={item.city}
                 followingInProgress={props.followingInProgress} 
                 followUnfollowThunkCreator={props.followUnfollowThunkCreator}
                />               
                )}
            </div>
            <Paginator 
            onPageChanged={props.onPageChanged} 
            pageSize={props.pageSize} 
            currentPage={props.currentPage} 
            totalItemsCount={props.totalItemsCount}
            />
            <button>Show more</button>
        </div>
    );
}
export default Users;