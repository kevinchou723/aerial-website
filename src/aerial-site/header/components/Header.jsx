import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import pure from 'recompose/pure';
import compose from 'recompose/compose';
import { Link } from 'react-router-dom';

import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';

const styleSheet = theme => ({
    headerContainer:{
        backgroundColor: theme.palette.secondaryColor
    },
    headerWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: 'auto',
        padding: '1em 0',
        maxWidth: 1000,
        [theme.breakpoints.down('sm')]: {
            padding: '1em 2.5em'
        }
    },
    headerLinks: {
        textDecoration: 'none',
        color: theme.palette.primaryColor,
        fontSize: '1.75em',
        fontWeight: 700,
        textTransform: 'uppercase',
        marginRight: '1em',
        '&:hover': {
            color: theme.palette.black
        }
    },
    firstSection: {
    },
    secondSection: {
        '& :last-child': {
            margin: 0
        },
        [theme.breakpoints.down('sm')]:{
            display: 'none'
        }
    },
    mobileSection:{
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            alignItems: 'center'
        }
    },
    menuButton:{
        width: 20,
        height: 20,
        backgroundImage: ({ isMenuOpen }) => {
            return isMenuOpen ? "url('/assets/img/icons/m-nav-close.svg')" : "url('/assets/img/icons/m-nav-menu.svg')"
        }
    }
});

const openState = withState('isMenuOpen', 'setOpen', false);

const handlers = withHandlers({
    handleClick: ({ isMenuOpen, setOpen }) => event => setOpen(!isMenuOpen)
});

const Header = ({
    classes, isMenuOpen, handleClick
}) => (
    <div className={classes.headerContainer}>
        <div className={classes.headerWrapper}>
            <div className={classes.firstSection}>
                <Link className={classes.headerLinks} to="/"> Aerial Chen </Link>
            </div>
            <div className={classes.secondSection}>
                <Link className={classes.headerLinks} to="/"> Work </Link>
                <Link className={classes.headerLinks} to="/about"> About </Link>
            </div>
            <div className={classes.mobileSection}>
                <MenuButton isMenuOpen={isMenuOpen} onClick={handleClick} />
            </div>
        </div>
    </div>
);


const MenuButton = injectSheet(styleSheet)(({
    classes, onClick
})=>{
    return (
        <div className={classes.menuButton}
            onClick={onClick}
        ></div>
    )
});

Header.propTypes = {

}

Header.defaultProps = {

}


export default compose(
    openState,
    handlers,
    injectSheet(styleSheet),
    pure
)(Header);