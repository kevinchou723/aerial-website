import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import pure from 'recompose/pure';
import compose from 'recompose/compose';
import { Link } from 'react-router-dom';

const styleSheet = theme => ({
    headerContainer:{
        backgroundColor: theme.palette.secondaryColor
    },
    headerWrapper: {
        margin: 'auto',
        padding: '1em 0',
        maxWidth: 1000
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
        display: 'inline-block',
    },
    secondSection: {
        display: 'inline-block',
        float: 'right',
        '& :last-child': {
            margin: 0
        }
    }
});

const Header = ({
    classes
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
        </div>
    </div>
);

Header.propTypes = {

}

Header.defaultProps = {

}


export default compose(
    injectSheet(styleSheet),
    pure
)(Header);