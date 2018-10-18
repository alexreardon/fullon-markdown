import 'normalize.css';
import React, { Component } from 'react';
import injectStyles from 'react-jss';
import config from '../../config';
import Details from './details';
import Header from './header';
import { colors, gutters } from './global-style';
import Menu from './menu';
import Media from './media';
import Social from './social';

const global = `
    html {
        line-height: 1.5;
        font-family: ${config.font.fontFamily};
        font-size: 16px;
    }  
    h2 {
        margin-top: ${gutters.large * 2}px;
    }
    h2 > a {
        text-decoration: none;
    }
    h3 {
        color: ${colors.secondary};
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

export class App extends Component {
    componentDidMount() {
        // fix the fact that our hash routes do not
        // work on startup because the page has not rendered yet
        window.history.replaceState({}, '', '');
    }

    render() {
        const {sheet: {classes}} = this.props;

        return (
            <div className={classes.container}>
                <style>
                    {global}
                </style>
                <Menu />
                <Header />
                <Details />
                <Media />
                <Social />
            </div>
        );
    }
}

export default injectStyles(style)(App);
