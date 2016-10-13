import 'normalize.css';
import React from 'react';
import injectStyles from 'react-jss';
import menu from 'react-burger-menu';
import marked from 'marked';
import slugg from 'slugg';
import markdown from '../../details.md';
import Details from './details';
import Header from './header';
import { colors } from './global-style';

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
    }
    h3 {
        color: ${colors.gold};
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
    bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
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
        </Menu>
        <Header />
        <Details />
        <footer>footer</footer>
    </div>
);

export default injectStyles(style)(component);
