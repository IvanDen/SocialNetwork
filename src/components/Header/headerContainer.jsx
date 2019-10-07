import React from 'react'
import Header from "./header";
import {connect} from 'react-redux'
import {setAuthUserData, authUser} from "../../redux/auth-reduser";
import {compose} from "redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authUser();
    }

    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default compose(
    connect(mapStateToProps, {setAuthUserData, authUser})
)(HeaderContainer);