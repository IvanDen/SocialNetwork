import React from 'react';
import {connect} from 'react-redux';
import Profile from "./Profile";
import {Redirect, withRouter} from "react-router-dom";
import {getStatus, getUserProfile, updateStatus} from "../../../redux/profile-reduser";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 1617;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
   }
    render() {
        // if (!this.props.isAuth) return <Redirect to={'/login'} />

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     isAuth={this.props.isAuth}
            />
        );
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);