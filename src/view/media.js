import React from 'react';
import ReactPlayer from 'react-player';
import injectSheet from 'react-jss';
import config from '../../config';
import { container, gutters } from './global-style';

const style = {
    container,
    title: {
        marginTop: gutters.large * 2,
        textAlign: 'center',
    },
};

const playerStyle = {
    maxWidth: '100%',
    margin: '0 auto',
};

export default injectSheet(style)(({sheet: {classes}}) => (
    <div className={classes.container}>
        <h2>
            <a href="#media" name="media">Media</a>
        </h2>
        {config.videos.map(video => (
            <div key={video.url}>
                <h3 className={classes.title}>{video.title}</h3>
                <ReactPlayer url={video.url} style={playerStyle} />
            </div>
        ))}
    </div>
));