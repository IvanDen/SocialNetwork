import React from 'react';
import Class from './footer.module.css';
import Logo from "../Common/Logo/Logo";
import {Layout} from "antd";


const {Header, Footer} = Layout;
const FooterContent: React.FC = () => {
    return (
        <Footer style={{textAlign: 'center', background: '#001529'}}>
            <div className={Class.contentWrap}>
                <Logo />
            </div>
        </Footer>


    );
}

export default FooterContent;
