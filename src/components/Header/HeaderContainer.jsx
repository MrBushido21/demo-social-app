import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { LogoutThunk } from '../../redux/authReducer';
import { compose } from 'redux';

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} />;
    }
}

let mapStateToPropse = (state) => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

let mapDispathcToPropse = {
    LogoutThunk
}

export default compose(
    connect(mapStateToPropse, mapDispathcToPropse)
)(HeaderContainer);