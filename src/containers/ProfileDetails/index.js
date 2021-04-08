import React from 'react';
import './index.css';
import {Button} from "@material-ui/core";
import {values} from '../../utils/Variables';
import profileIcon from '../../assets/profile.jpg';
import logoIcon from '../../assets/logo.svg';
import handShakeIcon from '../../assets/handShake.svg';

class ProfileDetails extends React.Component {
    render() {
        return (
            <div className="profile_details">
                <div className="profile_section">
                    {
                        values && values.profile &&
                        values.profile !== ''
                        ? <img src={values && values.profile} alt="profile"/>
                        : <img src={profileIcon} alt="profile"/>
                    }
                    <h2> {values && values.name} </h2>
                </div>
                <div className="buttons_section">
                    {
                        values && values.list && values.list.map((item, index) => (
                            <Button key={index}>
                                <a href={item && item.url} target="_blank" without="true" rel="noreferrer">
                                    {item && item.name}
                                </a>
                            </Button>
                        ))
                    }
                </div>
                <div className="footer_section">
                    <div>
                        <div className="logo_section">
                            <img alt="logo" src={logoIcon} />
                            <span> &#10060; </span>
                            <img alt="hand shake" src={handShakeIcon} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileDetails;
