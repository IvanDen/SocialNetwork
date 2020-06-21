import React from 'react';
import loader from './../../../img/loader.gif';
import Class from './Preloader.module.css';

let Preloader: React.FC = () => {
    return (
        <div className={Class.wrap}>
            <div className={Class.loadingWap}>
                <img src={loader} />
            </div>
        </div>
    )
}
export default Preloader;
