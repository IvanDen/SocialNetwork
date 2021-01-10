import React from 'react';
import 'antd/dist/antd.css';
import News from "./components/Main/News/News";
import Music from "./components/Main/Music/Music";
import Settings from "./components/Main/Settings/Settings";

import {BrowserRouter, Link, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {UsersPage} from "./components/Main/Users/UsersContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/Common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reduser";
import store, {AppStateType} from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import {LoginPage} from './components/Login/LoginPage';
import FooterContent from "./components/Footer/footerContent";

import {Breadcrumb, Layout, Menu} from 'antd';
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import {HeaderLoginInfo} from "./components/Header/headerLoginInfo";

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;


const DialogsContainer = React.lazy(() => import('./components/Main/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Main/Profile/ProfileContainer'));
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'));

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
	initializeApp: () => void;
};


const SuspendedDialogs = withSuspense(DialogsContainer);
const SuspendedProfile = withSuspense(ProfileContainer);
const SuspendedChatPage = withSuspense(ChatPage);

// const SuspendedUsersContainer = withSuspense(UsersContainer);

class App extends React.Component<MapPropsType & DispatchPropsType> {

	catchAllUnhandledErrors = (PromiseRejection: PromiseRejectionEvent) => {        //We caught all the raw errors.
		console.log('promiseRejectionEvent', PromiseRejection);
	}

	componentDidMount() {
		this.props.initializeApp();
		window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
	}

	componentWillUnmount() {
		//Fires when the component is unmounted. Delete the event
		window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
	}

	render() {

		if (!this.props.initialized) {
			return <Preloader/>
		}
		return (
			<Layout style={{minHeight: '100vh'}}>
				<HeaderLoginInfo/>
				<Content style={{padding: '0 50px'}}>
					<Breadcrumb style={{margin: '16px 0'}}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<Layout className="site-layout-background" style={{padding: '24px 0'}}>
						<Sider className="site-layout-background" width={200}>
							<Menu
								mode="inline"
								defaultSelectedKeys={['1']}
								//defaultOpenKeys={['sub1']}
								style={{height: '100%'}}
							>
								<SubMenu key="sub1" icon={<UserOutlined/>} title="My Profile">
									<Menu.Item key="1"><Link to="/profile">Profile</Link></Menu.Item>
									<Menu.Item key="2"><Link to="/dialogs">Messages</Link></Menu.Item>
									<Menu.Item key="3">option3</Menu.Item>
									<Menu.Item key="4">option4</Menu.Item>
								</SubMenu>
								<SubMenu key="sub2" icon={<LaptopOutlined/>} title="Developers">
									<Menu.Item key="5"><Link to="/developers">Users</Link></Menu.Item>
									<Menu.Item key="6"><Link to="/chat">Chat</Link></Menu.Item>
								</SubMenu>
								<SubMenu key="sub3" icon={<NotificationOutlined/>} title="subnav 3">
									<Menu.Item key="10">option10</Menu.Item>
									<Menu.Item key="11">option11</Menu.Item>
									<Menu.Item key="12">option12</Menu.Item>
								</SubMenu>
							</Menu>
						</Sider>
						<Content style={{padding: '0 24px', minHeight: 280}}>
							<Switch>
								<Route path={'/dialogs'} render={() => <SuspendedDialogs/>}/>
								<Route path={'/developers'} render={() => <UsersPage/>}/>
								<Route path={'/news'} render={() => <News/>}/>
								<Route path={'/music'} render={() => <Music/>}/>
								<Route path={'/settings'} render={() => <Settings/>}/>
								<Route path={'/login'} render={() => <LoginPage/>}/>
								<Route path={'/chat'} render={() => <SuspendedChatPage/>}/>
								<Route path={'/profile/:userId?'} render={() => <SuspendedProfile/>}/>
								<Route exact path={'/'} render={() => <Redirect to={'/profile'}/>}/>
								<Route path={'*'} render={() => <div>404 not found</div>}/>
							</Switch>
						</Content>
					</Layout>
				</Content>
				<FooterContent/>
			</Layout>
		);
	}
}

const mapStateToProps = (state: AppStateType) => ({
	initialized: state.app.initialized
});

let AppContainer = compose<React.ComponentType>(
	withRouter,
	connect(mapStateToProps, {initializeApp}))(App);

const SocialApp: React.FC = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<AppContainer/>
			</Provider>
		</BrowserRouter>
	);
}

export default SocialApp;
