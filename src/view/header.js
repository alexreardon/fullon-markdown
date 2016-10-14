import React, { Component } from 'react';
import injectStyles from 'react-jss';
import ReactPlayer from 'react-player';
import Modal from 'react-modal';
import logo from './logo-dark.svg';
import config from '../../config.json';
import { button, gutters } from './global-style';

const youtubeConfig = {
    preload: true,
    playerVars: {
        // modestbranding: '1',
        // showinfo: '0',
    },
};

const modalStyles = {
    content: {
        backgroundColor: 'black',
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black',
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
        backgroundSize: 'contain',
        textIndent: -100001,
        maxWidth: 650,
        width: '100%',
        height: 200,
    },
    button,
    closeModalButton: {
        ...button,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: gutters.large * 2,
    },
};

@injectStyles(style)
class Header extends Component {

    state = {
        isModalOpen: false,
    };

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        });
    };

    openModal = () => {
        this.setState({
            isModalOpen: true,
        })
    };

    render() {
        const {sheet: {classes}} = this.props;
        const {isModalOpen} = this.state;

        return (
            <div className={classes.container}>
                <h1 className={classes.logo}>Full on</h1>
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={this.closeModal}
                    style={modalStyles}
                >
                    <ReactPlayer
                        url={config.trailerUrl}
                        playing
                        onEnded={this.closeModal}
                        width={800}
                        height={450}
                        style={{maxWidth: '100vw'}}
                    />
                    <button
                        className={classes.closeModalButton}
                        onClick={this.closeModal}
                    >
                        close
                    </button>
                </Modal>
                <button
                    onClick={this.openModal}
                    className={classes.button}
                >
                    Watch trailer
                </button>
            </div>
        );
    }
}

export default Header;
