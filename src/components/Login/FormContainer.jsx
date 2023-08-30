import { compose} from "redux";
import { connect } from 'react-redux';
import React from 'react';
import Login from "./Login";
import {setEmail, setPassword, setName, setNumber} from "../../redux/formReducer"
import {LoginThunk} from "../../redux/authReducer"
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class FormContainer extends React.Component {
    render() {
        return  <>
        <Login {...this.props}/>
        </>

    }
}

let mapStateToProps = (state) => ({
    email: state.form.email,
    password: state.form.password,
    isAuth: state.auth.isAuth,
    error: state.auth.error
})
let mapDspatchToprops =  ({
    setEmail,
    setPassword,
    setName,
    setNumber,
    LoginThunk
})

export default compose(
    connect(mapStateToProps, mapDspatchToprops),
    
)(FormContainer)
