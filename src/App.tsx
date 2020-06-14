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
import store, {AppStateType} from "./redux/redux-store";
import {Provider} from "react-redux";
import {withSuspense} from "./hoc/withSuspense";
const DialogsContainer = React.lazy(() => import('./components/Main/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Main/Profile/ProfileContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
    initializeApp: () => void;
};


const SuspendedDialogs = withSuspense(DialogsContainer);
const SuspendedProfile= withSuspense(ProfileContainer);
const SuspendedLogin = withSuspense (Login);

class App extends React.Component<MapPropsType & DispatchPropsType> {

    catchAllUnhandledErrors = (PromiseRejection: PromiseRejectionEvent) =>
    {        //We caught all the raw errors.
        console.log('promiseRejectionEvent', PromiseRejection);
    }
    componentDidMount()
    {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        //Fires when the component is unmounted. Delete the event
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
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
                        <Route path={'/dialogs'} render={() => <SuspendedDialogs />}/>
                        <Route path={'/users'} render={ () => <UsersContainer pageTitle={"Some Title!"} />} />
                        <Route path={'/news'} render={ () => <News />} />
                        <Route path={'/music'} render={ () => <Music />} />
                        <Route path={'/settings'} render={ () => <Settings />} />
                        <Route path={'/login'} render={() => <SuspendedLogin />} />
                        <Route path={'/profile/:userId?'} render={() => <SuspendedProfile />}/>
                        <Route exact path={'/'} render={() => <Redirect to={'/profile'} />}/>
                        <Route path={'*'} render={ () => <div>404 not found</div>} />
                    </Switch>
                </main>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
});

let AppContainer =  compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SocialApp: React.FC = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    );
}

export default SocialApp;
