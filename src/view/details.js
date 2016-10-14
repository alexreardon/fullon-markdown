import React, { PropTypes } from 'react';
import marked from 'marked';
import injectSheet from 'react-jss';
import slugg from 'slugg';
import markdown from '../../details.md';
import { contentWidth, gutters } from './global-style';

const renderer = new marked.Renderer();
renderer.heading = (text, level) => {
    if (level !== 2) {
        return `<h${level}>${text}</h${level}>`;
    }
    const slug = slugg(text);

    return `<h${level}>
                <a href="#${slug}" name="${slug}">${text}</a>
            </h${level}>`;
};

const original = renderer.table;
renderer.table = (header, body) => `<div class="responsive-table">${original(header, body)}</div>`;

const html = marked(markdown, {renderer});

const style = {
    container: {
        maxWidth: contentWidth,
        margin: '0 auto',
        padding: gutters.large * 2,
    },
};

const component = ({sheet: {classes}}) => (
    <section className={classes.container}>
        <div dangerouslySetInnerHTML={{__html: html}} />
    </section>
);

component.propTypes = {
    sheet: PropTypes.shape({
        classes: PropTypes.object,
    }),
};

export default injectSheet(style)(component);