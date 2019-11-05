import React from 'react';
import {connect} from 'react-redux';
import Profile from "./Profile";
import {Redirect, withRouter} from "react-router-dom";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../../redux/profile-reduser";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    //Component life cycle method. Mounting components.
    componentDidMount() {
        this.refreshProfile();
    }
    //Component life cycle method. redraws the component if there are changes in the state.
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props}
                 isOwner={!this.props.match.params.userId}
                 profile={this.props.profile}
                 status={this.props.status}
                 updateStatus={this.props.updateStatus}
                 isAuth={this.props.isAuth}
                 savePhoto={this.props.savePhoto}
            />
        );
    }
}

//We pass props from the tate to the container component.
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);