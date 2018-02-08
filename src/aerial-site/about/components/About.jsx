import React from 'react';
import injectSheet from 'react-jss';
import pure from 'recompose/pure';
import compose from 'recompose/compose';
import { Panel } from '../../common';

const styleSheet = theme => ({
    aboutWrapper:{},
    topSection:{
        margin: '1em 0'
    },
    quote:{
        marginBottom: '0.3em',
        color: theme.palette.primaryColor,
        fontWeight: 700,
        fontSize: '2.25em'
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
        margin: '2em 0',
        display: 'flex'
    },
    bottomLeft:{
        width: '71%'
    },
    description:{
        fontWeight: 300,
        fontSize: '1.8em',
        lineHeight: '1.6em'
    },
    bottomRight:{
        marginLeft: 'auto',
        width: '20%'
    },
    contactWrapper:{
        paddingBottom: '2em'
    },
    linkedinWrapper:{
        padding: '2em 0',
        borderStyle: 'solid',
        borderColor: theme.palette.primaryColor,
        borderWidth: '1px 0'
    },
    siteByWrapper:{
        paddingTop: '2em'
    },
    sectionTitle:{
        textDecoration: 'none',
        color: theme.palette.primaryColor,
        fontWeight: 700,
        fontSize: '2.25em',
        '&:hover': {
            color: theme.palette.black
        }
    },
    email:{
        textDecoration: 'none',
        color: theme.palette.primaryColor,
        fontSize: '1.25em',
        '&:hover': {
            color: theme.palette.black
        }
    },
    site:{
        fontSize: '1em',
        fontWeight: '700'
    },
    by:{
        fontSize: '1em',
        fontWeight: 300,
        marginTop: '0.25em'
    }
});

const About = ({
    classes
}) => (
        <Panel>
            <div className={classes.aboutWrapper}>
                <div className={classes.topSection}>
                    <h2 className={classes.quote}>“Creativity is intelligence having fun”</h2>
                    <p className={classes.albert}>- Albert Einstein</p>
                </div>
                <div className={classes.midSection}>
                    <img alt="about" className={classes.aboutImage} src="/assets/img/about/about.jpg"/>
                </div>
                <div className={classes.bottomSection}>
                    <div className={classes.bottomLeft}>
                        <p className={classes.description}>
                            Aerial Chen is a Graphic Designer based in New York City. 
                            She previously worked at the multidisciplinary studio Adler Design 
                            following graduation from the School of Visual Arts.  Aerial’s work is designed to 
                            delight, whilst educating and forming meaningful connections and experiences. 
                            When Aerial is away from her keyboard, she enjoys letting her mind wander and 
                            observing the minutiae of everyday life, with a pencil in one hand and a sketchbook in 
                            the other.
                        </p>
                    </div>
                    <div className={classes.bottomRight}>
                        <div className={classes.contactWrapper}>
                            <div>
                                <a className={classes.sectionTitle} href="mailto:aerialah@gmail.com"> Contact </a>
                            </div>
                            <div>
                                <a className={classes.email} href="mailto:aerialah@gmail.com"> aerialah@gmail.com </a>
                            </div>
                        </div>
                        <div className={classes.linkedinWrapper}>
                            <a className={classes.sectionTitle} href="https://www.linkedin.com/in/aerialchen" target="_blank"> LinkedIn </a>
                        </div>
                        <div className={classes.siteByWrapper}>
                            <p className={classes.site}>Site:</p>
                            <p className={classes.by}>Designed by Aerial Chen</p>
                            <p className={classes.by}>Developed by Kevin Chou</p>
                        </div>
                    </div>
                </div>
            </div>
        </Panel>
    );

export default compose(
    injectSheet(styleSheet),
    pure
)(About);