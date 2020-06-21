import React from 'react'
import Header, {MapHeaderPropsType, DispatchHeaderPropsType} from "./header";
import {connect} from 'react-redux'
import {logout} from "../../redux/auth-reduser";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";

type HeaderContainerPropsType = {
    isAuth: boolean;
    login: string;
    logout: () => void;
}

class HeaderContainer extends React.Component<MapHeaderPropsType & DispatchHeaderPropsType> {

    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default compose(
    connect<MapHeaderPropsType, DispatchHeaderPropsType, {}, AppStateType>(mapStateToProps, {logout})
)(HeaderContainer);
