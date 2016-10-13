import React, {PropTypes} from 'react';
import marked from 'marked';
import injectSheet from 'react-jss';
import markdown from '../../details.md';
import {contentWidth, gutters} from './global-style';

const html = marked(markdown);

const style = {
    container: {
        width: contentWidth,
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