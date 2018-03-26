import React from 'react';
import injectSheet from 'react-jss';
import pure from 'recompose/pure';
import compose from 'recompose/compose';
import branch from 'recompose/branch';
import renderNothing from 'recompose/renderNothing';
import withHandlers from 'recompose/withHandlers';
import { Link } from 'react-router-dom';

const styleSheet = theme => ({
    mobileMenuContainer:{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.primaryColor,
        zIndex: theme.zIndex.modal
    },
    contentWrapper: {
        display: 'block',
        height: '100%',
        padding: '1.5em 2.5em'
    },
    content: {
        padding: '1.75em 0',
        borderBottom: `1px solid ${theme.palette.white}`
    },
    contentFirst:{
        padding: '1.5em 0 1.75em 0',
        borderBottom: `1px solid ${theme.palette.white}`
    },
    contentLast: {
        padding: '1.75em 0'
    },
    sectionTitle: {
        textDecoration: 'none',
        color: theme.palette.white,
        fontWeight: 600,
        fontSize: '1.5em',
        textTransform: 'uppercase',
        width: '100%',
        display: 'block'
    },
    email: {
        textDecoration: 'none',
        color: theme.palette.white,
        fontSize: '1.1em'
    },
});

const branchProp = branch(
    ({ isMobileMenuOpen, width }) => {
        return width <= 600 && isMobileMenuOpen;
    },
    MobileMenu => MobileMenu,
    renderNothing
);

const handlers = withHandlers({
    handleClick: ({ setMobileMenuOpen }) => event => setMobileMenuOpen(false)
});

const MobileMenu = ({
    classes, handleClick
}) => {
    return (
        <div className={classes.mobileMenuContainer}>
            <div className={classes.contentWrapper}>
                <div className={classes.contentFirst}>
                    <Link className={classes.sectionTitle} onClick={handleClick} to="/"> Work </Link>
                </div>
                <div className={classes.content}>
                    <Link className={classes.sectionTitle} onClick={handleClick} to="/about"> About </Link>
                </div>
                <div className={classes.content}>
                    <div>
                        <a className={classes.sectionTitle} onClick={handleClick} href="mailto:aerialah@gmail.com"> Contact </a>
                    </div>
                    <div>
                        <a className={classes.email} onClick={handleClick} href="mailto:aerialah@gmail.com"> aerialah@gmail.com </a>
                    </div>
                </div>
                <div className={classes.content}>
                    <a className={classes.sectionTitle} onClick={handleClick} href="https://www.linkedin.com/in/aerialchen" target="_blank" rel="noopener noreferrer"> LinkedIn </a>
                </div>
                <div className={classes.contentLast}>
                    <a className={classes.sectionTitle} href="https://www.instagram.com/obedesign/" target="_blank" rel="noopener noreferrer"> Obé Design </a>
                </div>
            </div>
        </div>
    );
};

export default compose(
    handlers,
    pure,
    branchProp,
    injectSheet(styleSheet),
)(MobileMenu);