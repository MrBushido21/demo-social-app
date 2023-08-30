import { connect } from 'react-redux'
import React from 'react';
import Users from './Users';
import { follow, setCurrentPage, unfollow, toogleFollowingInProgress, getUsersThunkCreator, followUnfollowThunkCreator } from '../../redux/usersReducer'
import Preloader from '../common/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalItemsCount, getUsers } from '../../redux/users-selectors';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p) => {
        this.props.getUsersThunkCreator(p, this.props.pageSize)
        this.props.setCurrentPage(p)
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalItemsCount={this.props.totalItemsCount} pageSize={this.props.pageSize} 
        users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow} 
        followingInProgress={this.props.followingInProgress} 
        onPageChanged={this.onPageChanged} currentPage={this.props.currentPage} 
        followUnfollowThunkCreator={this.props.followUnfollowThunkCreator}/>
    </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state) ,
        pageSize: getPageSize(state),
        totalItemsCount: getTotalItemsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),    
    }
}

let mapDispatchToProps = {
    follow,
    unfollow,
    setCurrentPage,
    toogleFollowingInProgress,
    getUsersThunkCreator,
    followUnfollowThunkCreator
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(UsersContainer)

