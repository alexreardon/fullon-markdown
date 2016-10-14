import 'normalize.css';
import React from 'react';
import menu from 'react-burger-menu';
import marked from 'marked';
import slugg from 'slugg';
import markdown from '../../details.md';
import { colors } from './global-style';

const MenuSlide = menu.slide;

const tokens = marked.lexer(markdown);
const headings = tokens
    .filter(token => token.type === 'heading' && token.depth === 2)
    .map((token) => {
        const slug = slugg(token.text);
        return <a key={slug} href={`#${slug}`}>{token.text}</a>;
    });

const menuStyles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        right: '36px',
        top: '36px',
    },
    bmBurgerBars: {
        background: colors.text,
    },
    bmCrossButton: {
        height: '24px',
        width: '24px',
    },
    bmCross: {
        background: colors.text,
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

export default () => (
    <MenuSlide right styles={menuStyles}>
        {headings}
        <a href="http://en.stphils.org.au/">St Phils home page</a>
    </MenuSlide>
);
