import 'normalize.css';
import React from 'react';
import injectStyles from 'react-jss';
import Details from './details';
import Header from './header';
import { colors, gutters } from './global-style';
import Menu from './menu';

const global = `
    html {
        line-height: 1.5;
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
    }  
    h2 {
        text-transform: uppercase;
        margin-top: ${gutters.large * 2}px;
    }
    h2 > a {
        text-decoration: none;
    }
    h3 {
        color: ${colors.gold};
    }
    a {
        color: ${colors.text}
    }
    /* responsive images */
    img {
        max-width: 100%;
        height: auto;
    }
    /* responsive tables */
    table {
        width: 100%;
        max-width: 100%;
        text-align: left;
        border-collapse: collapse;
        margin: ${gutters.large * 2}px 0px;
    }
    
    table td, table th {
        border-top: 1px solid ${colors.text};
        padding: ${gutters.medium}px;
    }
    
    .responsive-table {
        width: 100%;
        overflow-y: hidden;
    }
`;

const style = {
    container: {
        backgroundColor: colors.background,
        color: colors.text,
    },
};

const component = ({sheet: {classes}}) => (
    <div className={classes.container}>
        <style>
            {global}
        </style>
        <Menu />
        <Header />
        <Details />
    </div>
);

export default injectStyles(style)(component);
