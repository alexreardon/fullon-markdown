import 'normalize.css';
import React from 'react';
import injectStyles from 'react-jss';
import menu from 'react-burger-menu';
import marked from 'marked';
import slugg from 'slugg';
import markdown from '../../details.md';
import Details from './details';
import Header from './header';
import { colors, gutters } from './global-style';

const tokens = marked.lexer(markdown);
const headings = tokens
    .filter(token => token.type === 'heading' && token.depth === 2)
    .map((token) => {
        const slug = slugg(token.text);
        return <a key={slug} href={`#${slug}`}>{token.text}</a>;
    });

const Menu = menu.slide;

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
        color: ${colors.white}
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
        border-top: 1px solid ${colors.white};
        padding: ${gutters.medium}px;
    }
    
    .responsive-table {
        width: 100%;
        overflow-y: hidden;
    }
`;

const menuStyles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        right: '36px',
        top: '36px',
    },
    bmBurgerBars: {
        background: colors.white,
    },
    bmCrossButton: {
        height: '24px',
        width: '24px',
    },
    bmCross: {
        background: colors.white,
    },
    bmMenuWrap: {
        background: '#373a47',
    },
    bmMenu: {

        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',

        // stop overflow
        height: 'auto',
    },
    bmMorphShape: {
        fill: '#373a47',
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em',
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)',
    },
};

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
        <Menu right styles={menuStyles}>
            {headings}
            <a href="http://en.stphils.org.au/">St Phils home page</a>
        </Menu>
        <Header />
        <Details />
    </div>
);

export default injectStyles(style)(component);
