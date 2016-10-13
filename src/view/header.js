import React, { Component } from 'react';
import injectStyles from 'react-jss';
import ReactPlayer from 'react-player';
import logo from './logo-dark.png';

const youtubeConfig = {
    preload: true,
    playerVars: {
        // modestbranding: '1',
        // showinfo: '0',
    },
};

const style = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'contain',
    },
    logo: {
        backgroundImage: `url(${logo})`,
        backgroundRepeat: 'no-repeat',
        // width: 650,
        // height: 200,
        backgroundSize: 'contain',
        textIndent: -100001,
        // width: '100%',
        // maxWidth: 650,
        // height: 'auto',
        // height: 200
        maxWidth: 650,
        width: '100%',
        height: 200,
    },
};

@injectStyles(style)
class Header extends Component {
    state = {
        isTrailerReady: false,
        isTrailerPlaying: false,
    };

    onTrailerReady = () => {
        this.setState({
            isTrailerReady: true,
        });
    };

    toggleTrailer = () => {
        this.setState({
            isTrailerPlaying: !this.state.isTrailerPlaying,
        });
    };

    render() {
        const {sheet: {classes}} = this.props;
        const {isTrailerReady, isTrailerPlaying} = this.state;

        const button = isTrailerReady ? (
            <button onClick={this.toggleTrailer}>
                {isTrailerPlaying ? 'Stop' : 'Play trailer'}
            </button>
        ) : null;

        return (
            <div className={classes.container}>
                <h1 className={classes.logo}>Full on</h1>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=jMRAzUf8vcs"
                    hidden={!isTrailerPlaying}
                    playing={isTrailerPlaying}
                    onReady={this.onTrailerReady}
                />
                {button}
            </div>
        );
    }
}

export default Header;
