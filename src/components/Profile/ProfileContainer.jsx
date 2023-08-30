import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { profileUsersThunk, setStatusThunk, updateStatusThunk} from '../../redux/profileReducer';
import { useParams } from 'react-router-dom'; 
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

function withRouter(Children){
     return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
  }


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 29599;
        }
        this.props.profileUsersThunk(userId)
        this.props.setStatusThunk(userId)
    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

let mapDispatchToProps = {
    profileUsersThunk,
    setStatusThunk,
    updateStatusThunk
}



export default compose(
connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer)