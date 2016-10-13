import 'normalize.css';
import React from 'react';
import injectStyles from 'react-jss';
import Details from './details';
import Header from './header';
import TopBar from './top-bar';
import { colors } from './global-style';

// css defaults
// import './app.style.css';

const global = `
    html {
        line-height: 1.5;
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
    }  
    h2 {
        text-transform: uppercase;
    }
    h3 {
        color: ${colors.gold};
    }
`;

const style = {
    container: {
        backgroundColor: colors.black,
        color: colors.white,
    },
};

const component = ({sheet: {classes}}) => (
    <div className={classes.container}>
        <style>
            {global}
        </style>
        <TopBar />
        <Header />
        <Details />
        <footer>footer</footer>
    </div>
);

export default injectStyles(style)(component);
