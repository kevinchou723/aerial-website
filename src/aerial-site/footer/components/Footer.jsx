import React from 'react';
import injectSheet from 'react-jss';
import pure from 'recompose/pure';
import compose from 'recompose/compose';

const styleSheet = theme => ({
    footerWrapper: {
        padding: '1em 5em',
        backgroundColor: theme.palette.secondaryColor
    },
    footerLinks: {
        textDecoration: 'none',
        color: theme.palette.primaryColor,
        fontSize: '1em',
        fontWeight: 500,
        textTransform: 'capitalize',
        marginRight: '1em',
        '&:hover': {
            color: theme.palette.black
        }
    },
    firstSection: {
        display: 'inline-block'
    },
    secondSection: {
        display: 'inline-block',
        float: 'right',
        '& :last-child': {
            margin: 0
        }
    }
});

const Footer = ({
    classes
}) => (
        <div className={classes.footerWrapper}>
            <div className={classes.firstSection}>
                <div className={classes.footerLinks}> &copy; 2018 Aerial Chen </div>
            </div>
            <div className={classes.secondSection}>
                <a className={classes.footerLinks} href="mailto:aerialah@gmail.com"> contact </a>
                <a className={classes.footerLinks} href="https://www.linkedin.com/in/aerialchen" target="_blank"> linkedin </a>
            </div>
        </div>
    );

export default compose(
    injectSheet(styleSheet),
    pure
)(Footer);