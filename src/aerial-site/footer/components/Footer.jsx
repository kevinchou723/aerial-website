import React from 'react';
import injectSheet from 'react-jss';
import pure from 'recompose/pure';
import compose from 'recompose/compose';
import { Link } from 'react-router-dom';

const styleSheet = theme => ({
    footerContainer: {
        backgroundColor: theme.palette.secondaryColor
    },
    footerWrapper: {
        margin: 'auto',
        padding: '1em 0',
        maxWidth: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        [theme.breakpoints.between('sm', 'sm')]: {
            marginLeft: '3em'
        }
    },
    secondSection: {
        '& :last-child': {
            margin: 0
        },
        [theme.breakpoints.between('sm', 'sm')]: {
            marginRight: '3em'
        }
    },
    by: {
        fontSize: '1em',
        fontWeight: 300,
        marginTop: '0.25em',
        '& a': {
            textDecoration: 'none',
            fontWeight: 700,
            color: theme.palette.primaryColor,
            '&:hover': {
                color: theme.palette.black
            }
        },
        [theme.breakpoints.between('sm', 'sm')]: {
            fontSize: '0.76em'
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
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
                <p className={classes.by}>Site designed by <Link to="/about">Aerial Chen</Link></p>
                <div className={classes.secondSection}>
                    <a className={classes.footerLinks} href="mailto:aerialah@gmail.com"> contact </a>
                    <a className={classes.footerLinks} href="https://www.linkedin.com/in/aerialchen" target="_blank" rel="noopener noreferrer"> linkedin </a>
                </div>
            </div>
        </div>
    );

export default compose(
    pure,
    injectSheet(styleSheet),
)(Footer);