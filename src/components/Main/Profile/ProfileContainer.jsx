import React from 'react';
import * as axios from "axios/index";
import {connect} from 'react-redux';
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../../api/api";
import {getUserProfile} from "../../../redux/profile-reduser";



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 1617;
        }
        this.props.getUserProfile(userId);
        usersAPI.getProfile(userId)
   }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);