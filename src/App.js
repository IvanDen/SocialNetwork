import React from 'react';
import './index.css';
import './App.css';
import Navbar from "./components/Navbar/navbar";
import News from "./components/Main/News/News";
import Music from "./components/Main/Music/Music";
import Settings from "./components/Main/Settings/Settings";
import Footer from "./components/Footer/footer";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Main/Dialogs/DialogsContainer";
import UsersContainer from "./components/Main/Users/UsersContainer";
import ProfileContainer from "./components/Main/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/headerContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/Common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reduser";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <main>
                    <Route path={'/profile/:userId?'} render={ () => <ProfileContainer />} />

                    <Route path={'/dialogs'} render={ () => <DialogsContainer
                        store={this.props.store} />} />
                    <Route path={'/users'} render={ () => <UsersContainer />} />

                    <Route path={'/news'} render={ () => <News />} />
                    <Route path={'/music'} render={ () => <Music />} />
                    <Route path={'/settings'} render={ () => <Settings />} />
                    <Route path={'/login'} render={ () => <Login />} />

                </main>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
