import React from 'react';
import injectSheet from 'react-jss';
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
};

export default injectSheet(style)(({sheet: {classes}}) => (
    <div className={classes.container}>
        <a href="https://instagram.com/stphilseastwoodyouth">
            <img 
                src={instagram} 
                alt="Instagram Logo"
                style={{
                    height: '20px',
                    marginRight: gutters.medium,
                    verticalAlign: '-4px'
                }}
            />
            StPhilsEastwoodYouth
        </a>
        <a href="https://facebook.com/youthateastwood" style={{marginTop: gutters.medium}}>
            <img 
                src={facebook} 
                alt="Facebook Logo"
                style={{
                    height: '20px',
                    marginRight: gutters.medium,
                    verticalAlign: '-4px'
                }}
            />
            YouthAtEastwood
        </a>
    </div>
));
