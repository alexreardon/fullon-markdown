import React, { Component } from 'react';
import injectStyles from 'react-jss';
import ReactPlayer from 'react-player';
import Modal from 'react-modal';
import headerImage from '../img/header-image_860x391.jpg';
import logo from '../img/full-on-2020-logo.svg'
import config from '../../config';
import { button, gutters, contentWidth } from './global-style';

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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'contain',
    },
    logo: {
        maxWidth: contentWidth,
        width: '100%',
        marginBottom: gutters.medium,
        marginTop: 0,
        overflow: 'hidden'
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
        });
    };

    render() {
        const {sheet: {classes}} = this.props;
        const {isModalOpen} = this.state;

        return (
            <div className={classes.container}>
                <h1 className={classes.logo}>
                    <img 
                        src={logo} 
                        style={{
                            position: 'absolute',
                            transform: 'scale(0.5)'
                        }}
                    />
                    <img
                        src={headerImage} 
                        alt='Full On 2020 Youth Camp'
                        style={{
                            filter: 'blur(3px)',
                            transform: 'scale(1.1)'
                        }}
                    />
                </h1>
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
                        Close Video
                    </button>
                </Modal>
                <button
                    onClick={this.openModal}
                    className={classes.button}
                >
                    What is Full On? (Video)
                </button>
            </div>
        );
    }
}

export default Header;
