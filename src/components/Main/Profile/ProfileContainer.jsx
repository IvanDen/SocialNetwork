import React from 'react';
import * as axios from "axios/index";
import {connect} from 'react-redux';
import Profile from "./Profile";
import {Redirect, withRouter} from "react-router-dom";
import {getUserProfile} from "../../../redux/profile-reduser";



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 1617;
        }
        this.props.getUserProfile(userId);

   }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'} />

        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);