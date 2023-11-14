import React from 'react';
import PropTypes from 'prop-types';

import FbSvg from '@assets/Social/fb.svg';
import IgSvg from '@assets/Social/ig.svg';
import InSvg from '@assets/Social/in.svg'
import TgSvg from '@assets/Social/tg.svg'
import BeSvg from '@assets/Social/be.svg'
import { logEvent } from '@helpers/metrics';

const SideBar = ({ vertical }) => {

    const clickHandler = (name) => {

        switch (name) {
            case 'fb':
                logEvent('SocialOpenFB', { SocialNetwork: 'facebook' })
                window.open("https://www.facebook.com/redmadrobot");
                return;
            case 'ig':
                logEvent('SocialOpenInsta', { SocialNetwork: 'instagram' })
                window.open("https://www.instagram.com/red_mad_robot/");
                return;
            case 'tg':
                logEvent('SocialOpenTelegram', { SocialNetwork: 'telegram' })
                window.open("https://t.me/Redmadnews");
                return;
            case 'in':
                logEvent('SocialOpenLinkedin', { SocialNetwork: 'linkedin' })
                window.open("https://www.linkedin.com/company/redmadrobot");
                return;
            case 'be':
                logEvent('SocialOpenBehance', { SocialNetwork: 'behance' })
                window.open("https://www.behance.net/redmadrobot");
                return;
            default:
                return;
        }
    }

    return (
        <div className = {
            `social_wrap ${vertical ? "vertical" : ''}`
        }>
            {/* <div className="social_wrap__icon social_wrap__icon--fb" onClick={() => clickHandler('fb')}>
                <FbSvg />
            </div>

            <div className="social_wrap__icon social_wrap__icon--ig" onClick={() => clickHandler('ig')}>
                <IgSvg />
            </div> */}

            <div className="social_wrap__icon social_wrap__icon--tg" onClick={() => clickHandler('tg')}>
                <TgSvg />
            </div>

            <div className="social_wrap__icon social_wrap__icon--in" onClick={() => clickHandler('in')}>
                <InSvg />
            </div>
            <div className="social_wrap__icon social_wrap__icon--be" onClick={() => clickHandler('be')}>
                <BeSvg />
            </div>
        </div>
    )
}

SideBar.propTypes = {
    vertical: PropTypes.bool,
};

SideBar.defaultProps = {
    vertical: false,
};

export default SideBar;