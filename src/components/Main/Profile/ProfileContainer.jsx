import React from 'react';
import {connect} from 'react-redux';
import Profile from "./Profile";
import {Redirect, withRouter} from "react-router-dom";
import {getUserProfile} from "../../../redux/profile-reduser";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";



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
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);