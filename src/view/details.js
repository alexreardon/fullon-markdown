import React from 'react';
import marked from 'marked';
import markdown from '../../details.md';

const html = marked(markdown);

export default () => (
    <div dangerouslySetInnerHTML={{ __html: html }} />
);