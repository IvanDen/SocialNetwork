import React from 'react';
import Class from './footer.module.css';
import FooterNavLink from "./FooterNavLink/FooterNavLink";
import Logo from "../Common/Logo/Logo";

const Footer = () => {
    return (
        <footer>
            <div className={Class.contentWrap}>
                <FooterNavLink />
                <Logo />
            </div>
        </footer>
    );
}

export default Footer;