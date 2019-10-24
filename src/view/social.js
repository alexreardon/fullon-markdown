import React from 'react';
import injectSheet from 'react-jss';
import config from '../../config';
import instagram from '../img/instagram.svg';
import facebook from '../img/facebook.svg';
import { gutters } from './global-style';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: gutters.large * 4,
    paddingBottom: gutters.large * 2,
  },
  socialLogo: {
    height: '20px',
    marginRight: gutters.medium,
    verticalAlign: '-4px',
    padding: '0px'
  }
};

export default injectSheet(style)(({sheet: {classes}}) => (
    <div className={classes.container}>
        <a href={`https://instagram.com/${config.social.instagram}`}>
            <img 
                src={instagram} 
                alt="Instagram Logo"
                className={classes.socialLogo}
            />
            {config.social.instagram}
        </a>
        <a href={`https://facebook.com/${config.social.facebook}`} style={{marginTop: gutters.medium}}>
            <img 
                src={facebook} 
                alt="Facebook Logo"
                className={classes.socialLogo}
            />
            {config.social.facebook}
        </a>
    </div>
));
