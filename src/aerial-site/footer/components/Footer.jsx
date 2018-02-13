import React from 'react';
import injectSheet from 'react-jss';
import pure from 'recompose/pure';
import compose from 'recompose/compose';

const styleSheet = theme => ({
    footerContainer: {
        backgroundColor: theme.palette.secondaryColor
    },
    footerWrapper: {
        margin: 'auto',
        padding: '1em 0',
        maxWidth: 1000,
        [theme.breakpoints.down('xs')]:{
            padding: '1em 2.5em'
        }
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
        },
        [theme.breakpoints.down('xs')]:{
            fontSize: '0.85em',
            fontWeight: 700
        }
    },
    firstSection: {
        display: 'inline-block',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 10
        }
    },
    secondSection: {
        display: 'inline-block',
        float: 'right',
        '& :last-child': {
            margin: 0
        },
        [theme.breakpoints.down('sm')]: {
            marginRight: 10
        }
    }
});

const Footer = ({
    classes
}) => (
        <div className={classes.footerContainer}>
            <div className={classes.footerWrapper}>
                <div className={classes.firstSection}>
                    <div className={classes.footerLinks}> &copy; 2018 Aerial Chen </div>
                </div>
                <div className={classes.secondSection}>
                    <a className={classes.footerLinks} href="mailto:aerialah@gmail.com"> contact </a>
                    <a className={classes.footerLinks} href="https://www.linkedin.com/in/aerialchen" target="_blank" rel="noopener noreferrer"> linkedin </a>
                </div>
            </div>
        </div>
    );

export default compose(
    injectSheet(styleSheet),
    pure
)(Footer);