import React, {Suspense} from 'react';
import ErrorBoundary from 'react-error-boundary';
import './index.css';
import './App.css';
import Navbar from "./components/Navbar/navbar";
import News from "./components/Main/News/News";
import Music from "./components/Main/Music/Music";
import Settings from "./components/Main/Settings/Settings";
import Footer from "./components/Footer/footer";
import {BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import UsersContainer from "./components/Main/Users/UsersContainer";
import HeaderContainer from "./components/Header/headerContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/Common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reduser";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import {withSuspense} from "./hoc/withSuspense";
const DialogsContainer = React.lazy(() => import('./components/Main/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Main/Profile/ProfileContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));




class App extends React.Component {

    catchAllUnhandledErrors = (promiseRejectionEvent, reason, promise) =>
    {        //We caught all the raw errors.
        console.log('promiseRejectionEvent', promiseRejectionEvent);
        console.log('reason', reason);
        console.log('promise', promise);
    }
    componentDidMount()
    {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors());
    }
    componentWillUnmount() {
        //Fires when the component is unmounted. Delete the event
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors());
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
                    <Switch>
                        <Route path={'/dialogs'} render={withSuspense (DialogsContainer)}/>
                        <Route path={'/users'} render={ () => <UsersContainer />} />
                        <Route path={'/news'} render={ () => <News />} />
                        <Route path={'/music'} render={ () => <Music />} />
                        <Route path={'/settings'} render={ () => <Settings />} />
                        <Route path={'/login'} render={withSuspense (Login)} />
                        <Route path={'/profile/:userId?'} render={withSuspense(ProfileContainer)}/>
                        <Route exact path={'/'} render={() => <Redirect to={'/profile'} />}/>
                        <Route path={'*'} render={ () => <div>404 not found</div>} />
                    </Switch>
                </main>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer =  compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SocialApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    );
}

export default SocialApp;