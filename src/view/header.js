import React from 'react';
import injectStyles from 'react-jss';

const style = {
    container: {
        minHeight: '100vh',
    },
};

const component = ({sheet: {classes}}) => (
    <div className={classes.container}>
        
    </div>
);

export default injectStyles(style)(component);
