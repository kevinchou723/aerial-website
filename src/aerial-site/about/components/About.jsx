import React from 'react';
import injectSheet from 'react-jss';
import pure from 'recompose/pure';
import lifecycle from 'recompose/lifecycle';
import compose from 'recompose/compose';
import { Panel } from '../../common';

const styleSheet = theme => ({
    aboutWrapper:{
    },
    topSection:{
        margin: '1em 0',
        [theme.breakpoints.between('sm', 'sm')]: {
            margin: '1em 3em'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0 2.5em'
        }
    },
    quote:{
        marginBottom: '0.3em',
        maxWidth: '75%',
        color: theme.palette.primaryColor,
        fontWeight: 700,
        fontSize: '2.25em',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5em',
            lineHeight: 1.5,
            maxWidth: '100%',
        }
    },
    albert:{
        color: theme.palette.primaryColor,
        fontSize: '1.25em',
    },
    midSection: {
        margin: '3em 0'
    },
    aboutImage:{
        width: '100%'
    },
    bottomSection: {
        margin: '4em 0',
        display: 'flex',
        [theme.breakpoints.between('sm', 'sm')]: {
            margin: '2em 3em'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0 2.5em',
            flexDirection: 'column'
        }
    },
    bottomLeft:{
        width: '71%',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    },
    description:{
        fontWeight: 300,
        fontSize: '1.5em',
        lineHeight: '1.6em',
        [theme.breakpoints.between('sm', 'sm')]: {
            fontSize: '1.5em'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.2em'
        }
    },
    bottomRight:{
        marginLeft: 'auto',
        width: '20%',
        [theme.breakpoints.down('xs')]: {
            margin: '0',
            width: '100%'
        }
    },
    contactWrapper:{
        paddingBottom: '2em',
        [theme.breakpoints.between('sm', 'sm')]: {
            lineHeight: '1.75em'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '2em',
            padding: '2em 0',
            borderTop: `1px solid ${theme.palette.primaryColor}`
        }
    },
    contactSectionWrapper:{
        marginBottom: '0.25em'
    },
    linkedinWrapper:{
        padding: '2em 0',
        borderStyle: 'solid',
        borderColor: theme.palette.primaryColor,
        borderWidth: '1px 0'
    },
    siteByWrapper:{
        paddingTop: '2em',
        lineHeight: '1.25em',
        [theme.breakpoints.between('sm', 'sm')]: {
            lineHeight: '1.2em'
        }
    },
    sectionTitle:{
        textDecoration: 'none',
        color: theme.palette.primaryColor,
        fontWeight: 700,
        fontSize: '2.25em',
        '&:hover': {
            color: theme.palette.black
        },
        [theme.breakpoints.between('sm', 'sm')]: {
            fontSize: '1.75em'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.75em'
        }
    },
    email:{
        textDecoration: 'none',
        color: theme.palette.primaryColor,
        fontSize: '1.25em',
        [theme.breakpoints.between('sm', 'sm')]: {
            fontSize: '0.95em'
        },
        '&:hover': {
            color: theme.palette.black
        }
    },
    site:{
        fontSize: '1em',
        fontWeight: '700',
        [theme.breakpoints.between('sm', 'sm')]: {
            fontSize: '0.95em'
        },
    },
    by:{
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
    }
});

const About = ({
    classes
}) => {
    const isMobile= window.innerWidth <= 600;
    const profileImage = isMobile ? "/assets/img/about/m-about.jpg" : "/assets/img/about/about.jpg";
    return (
        <Panel>
            <div className={classes.aboutWrapper}>
                <div className={classes.topSection}>
                    <h2 className={classes.quote}>“Serious playfulness makes it possible to be both engaged and carefree at the same time”</h2>
                    <p className={classes.albert}>- Mihaly Csikszentmihalyi</p>
                </div>
                <div className={classes.midSection}>
                    <img alt="about" className={classes.aboutImage} src={profileImage}/>
                </div>
                <div className={classes.bottomSection}>
                    <div className={classes.bottomLeft}>
                        <p className={classes.description}>
                            Aerial is a designer based in NYC specializing in Branding, Print Design and Creative Direction. She previously worked at the multidisciplinary studio, Adler Design as a senior designer following graduation from the School of Visual Arts. 
                        <br/><br/>
                            She is dedicated to transforming shapes, letterforms and colors into impactful, meaningful and delightful experiences via print, digital and environmental platforms. 
                        <br /><br />
                            On the side, Aerial continuously expands her design vocabulary and skillset through passion projects. Her latest ventures include Lettering, Digital Design (UI and HTML&CSS) and Motion Graphics. 
                        </p>
                    </div>
                    <div className={classes.bottomRight}>
                        <div className={classes.contactWrapper}>
                            <div className={classes.contactSectionWrapper}>
                                <a className={classes.sectionTitle} href="mailto:aerialah@gmail.com"> Contact </a>
                            </div>
                            <div>
                                <a className={classes.email} href="mailto:aerialah@gmail.com"> aerialah@gmail.com </a>
                            </div>
                        </div>
                        <div className={classes.linkedinWrapper}>
                            <a className={classes.sectionTitle} href="https://www.linkedin.com/in/aerialchen" target="_blank" rel="noopener noreferrer"> LinkedIn </a>
                        </div>
                        <div className={classes.siteByWrapper}>
                            <p className={classes.site}>Site:</p>
                            <p className={classes.by}>Designed by <a href="https://www.instagram.com/obedesign" target="_blank" rel="noopener noreferrer">Aerial Chen</a></p>
                            <p className={classes.by}>Developed by <a href="https://www.linkedin.com/in/kevinchou723" target="_blank" rel="noopener noreferrer">Kevin Chou</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </Panel>
    );
};

const onProps = {
    componentDidMount: (nextProps) => {
        if (window.pageYOffset !== 0) window.scroll(0, 0);
    }
}

export default compose(
    lifecycle(onProps),
    pure,
    injectSheet(styleSheet),
)(About);