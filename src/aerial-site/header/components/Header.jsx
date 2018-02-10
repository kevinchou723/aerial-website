import React from 'react';
import PropTypes from 'prop-types';
import withHandlers from 'recompose/withHandlers';
import injectSheet from 'react-jss';
import pure from 'recompose/pure';
import compose from 'recompose/compose';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';

const styleSheet = theme => ({
    headRoom: {
        [theme.breakpoints.down('xs')]: {
            position: ({ isMobileMenuOpen }) => {
                return isMobileMenuOpen ? 'fixed' : 'relative';
            }
        }
    },
    headerContainer:{
        backgroundColor: theme.palette.secondaryColor
    },
    headerWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: 'auto',
        padding: '1em 0',
        maxWidth: 1000,
        [theme.breakpoints.down('xs')]: {
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
        [theme.breakpoints.down('xs')]:{
            display: 'none'
        }
    },
    mobileSection:{
        display: 'none',
        [theme.breakpoints.down('xs')]: {
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

const handlers = withHandlers({
    handleClick: ({ isMobileMenuOpen, setMobileMenuOpen }) => event => setMobileMenuOpen(!isMobileMenuOpen)
});

const Header = ({
    classes, isMobileMenuOpen, handleClick
}) => (
    <Headroom disable={isMobileMenuOpen} className={classes.headRoom}>
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
                        <MenuButton isMenuOpen={isMobileMenuOpen} onClick={handleClick} />
                </div>
            </div>
        </div>
    </Headroom>
);


const MenuButton = injectSheet(styleSheet)(({
    classes, onClick
})=>{
    return (
        <div className={classes.menuButton}
            onClick={onClick}
        />
    )
});

Header.propTypes = {

}

Header.defaultProps = {

}


export default compose(
    handlers,
    injectSheet(styleSheet),
    pure
)(Header);