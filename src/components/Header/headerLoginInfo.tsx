import React from 'react';
import Class from './header.module.css';
import {Link, NavLink} from "react-router-dom";
import Logo from "../Common/Logo/Logo";
import {Avatar, Col, Menu, Row, Layout, Button} from "antd";
import {UserOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUserLogin, selectIsAuth} from "../../redux/auth-selectors";
import {logout} from "../../redux/auth-reduser";

export type MapHeaderPropsType = {}


const {Header} = Layout;
export const HeaderLoginInfo: React.FC<MapHeaderPropsType> = (props) => {

	const isAuth = useSelector(selectIsAuth);
	const login = useSelector(selectCurrentUserLogin);

	const dispatch = useDispatch();

	const logoutCallback = () => {
		dispatch(logout());
	}

	return (
		<Header className="header">
			<Row>
                <Col span={2}>
                    <div className="logo">
                        <Logo/>
                    </div>
                </Col>
				<Col span={18}>
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
						<Menu.Item key="1">
							<Link to="/developers">Developers</Link>
						</Menu.Item>
						{/*<Menu.Item key="2">nav 2</Menu.Item>*/}
						{/*<Menu.Item key="3">nav 3</Menu.Item>*/}
					</Menu>
				</Col>
				<Col span={4}>
                    {isAuth
                        ? <div className={Class.loginBlock}>
                            <Avatar style={{backgroundColor: '#87d068',}} icon={<UserOutlined/>}/>
                            <span className={`${Class.linc} ${Class.isLogin}`}>{login}</span>
                            <Button onClick={logoutCallback}>Logout</Button>
                        </div>
                        : <>
							<Button>
								<Link className={Class.linc} to={'/login'}>Login</Link>
							</Button>
						</>}
				</Col>
			</Row>

		</Header>
	);
}
