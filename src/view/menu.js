import 'normalize.css';
import React, { Component } from 'react';
import menu from 'react-burger-menu';
import marked from 'marked';
import injectSheet from 'react-jss';
import slugg from 'slugg';
import markdown from '../../details.md';
import { colors } from './global-style';

const MenuSlide = menu.slide;

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
        background: '#ffffff',
    },
    bmMenu: {

        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',

        // stop overflow
        height: 'auto',
    },
    bmMorphShape: {
        fill: '#ffffff',
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
    link: {
        // textDecoration: 'none',
    },
};

const tokens = marked.lexer(markdown);
const headings = tokens
    .filter(token => token.type === 'heading' && token.depth === 2);

export class Menu extends Component {
    render() {
        const {sheet: {classes}} = this.props;

        return (
            <MenuSlide right styles={menuStyles}>
                {headings.map((token) => {
                    const slug = slugg(token.text);
                    return <a className={classes.link} key={slug} href={`#${slug}`}>{token.text}</a>;
                })}
                <a className={classes.link} href="#media">Media</a>
                <a className={classes.link} href="http://en.stphils.org.au/">St Phils home page</a>
            </MenuSlide>
        );
    }
}

export default injectSheet(style)(Menu);