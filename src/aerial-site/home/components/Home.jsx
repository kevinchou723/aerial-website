import React from 'react';
import injectSheet from 'react-jss';
import pure from 'recompose/pure';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import Flexbox from 'flexbox-react';
import { Link } from 'react-router-dom';
import { pageNames } from '../../work/constants';

import windowDimensions from 'react-window-dimensions';

const styleSheet = theme => ({
    homePanel: {
        margin: '3em auto',
        maxWidth: 1000,
        [theme.breakpoints.down('xs')]: {
            margin: '1em auto 2em auto'
        }
    },
    topHomeContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '5em',
        [theme.breakpoints.down('xs')]: {
            margin: '1em auto 3em auto'
        }

    },
    aerialLogo: {
        width: '15%',
        [theme.breakpoints.down('xs')]: {
            width: '35%',
        }
    },
    mainTitle: {
        fontSize: '2.5em'
    },
    description: {
        margin: '1em 7em',
        fontSize: '1.25em',
        fontWeight: 300,
        lineHeight: 1.5,
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1em',
            margin: '1em 2.5em',
        }
    },
    hashTag: {
        fontWeight: 'bold'
    },
    mainFlexBox:{
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center'
        }
    },
    linkBox: {
        textDecoration: 'none',
        color: theme.palette.primaryColor,
        '&:hover':{
            color: theme.palette.black,
            opacity: 0.9
        }
    },
    image: {
        width: "100%",
        height: '100%'
    },
    imgTitle: {
        minHeight: 35,
        display: 'flex',
        alignItems: 'flex-start',
        padding: '15px 0',
        fontWeight: 300,
        fontSize: '0.85em',
        [theme.breakpoints.down('xs')]: {
            padding: '1em 2.5em 1.5em 2.5em',
            fontSize: '1em',
            fontWeight: 500
        }
    },
    flexSquare: {
        margin: '0 10px',
        '& img': {
            maxWidth: 490,
            maxHeight: 490
        },
        [theme.breakpoints.down('xs')]: {
            padding: 0,
            margin: 0
        }
    },
    flexLgRec: {
        margin: '0 10px',
    },
    flexSmallRec:{
        margin: '0 10px',
        '& img': {
            maxWidth: 490,
        }
    },
    flexSmSqLeft:{
        paddingRight: 10,
        '& img': {
            maxWidth: 235,
            maxHeight: 235
        }
    },
    flexSmSqRight: {
        paddingLeft: 10,
        '& img': {
            maxWidth: 235,
            maxHeight: 235
        }
    },
});

const Home = ({classes, workData, theme, width}) => {
    
    const isMobile = width <= theme.breakpoints.values.sm;
    return (
        <div className={classes.homePanel}>
            <div className={classes.topHomeContainer}>
                <img className={classes.aerialLogo} src='../../../../assets/img/ac-logo.svg' alt='ac-logo'/>
                <h1 className={classes.mainTitle}>AERIAL CHEN</h1>
                <p className={classes.description}>
                    Commited to transforming shapes, letterforms and colors into impactful, 
                    meaningful, educational, delightful, and wonderfully eye-opening experiences.
                </p>
                <p className={classes.hashTag}>#creator-thinker-maker-doer</p>
            </div>
            <Flexbox className={classes.mainFlexBox}>
                {isMobile ? <MobileHomeGrid workData={workData} /> : <DesktopHomeGrid workData={workData}/> }
            </Flexbox>
        </div>
    );
};

const MobileHomeGrid = injectSheet(styleSheet)(({
    classes, workData
}) => {
    return (
        <Flexbox flexDirection="column">
            {
                pageNames.map((pageName) => {
                    return (
                        <Flexbox key={pageName} className={classes.flexSquare}>
                            <ImageBox
                                key={pageName}
                                to={`/${pageName}`}
                                imgSrc={workData[pageName].mobileProfileImg}
                                title={workData[pageName].title}
                            />
                        </Flexbox>
                    )
                })
            }
        </Flexbox>
    );
});

const DesktopHomeGrid = injectSheet(styleSheet)(({
    classes, workData
}) => {
    return (
        <React.Fragment>
            <Flexbox flexDirection='column'>
                <Flexbox>
                    <Flexbox className={classes.flexSquare}>
                        <ImageBox
                            to='/fab-holiday'
                            imgSrc={workData['fab-holiday'].profileImg}
                            title={workData['fab-holiday'].title}
                        />
                    </Flexbox>
                    <Flexbox className={classes.flexSquare}>
                        <ImageBox
                            to='/fab-webredesign'
                            imgSrc={workData['fab-webredesign'].profileImg}
                            title={workData['fab-webredesign'].title}
                        />
                    </Flexbox>
                </Flexbox>
                <Flexbox className={classes.flexLgRec}>
                    <ImageBox
                        to='/ppf'
                        imgSrc={workData['ppf'].profileImg}
                        title={workData['ppf'].title}
                    />
                </Flexbox>
                <Flexbox>
                    <Flexbox flexDirection="column">
                        <Flexbox className={classes.flexSquare}>
                            <ImageBox
                                to='/obe-alphanumeric'
                                imgSrc={workData['obe-alphanumeric'].profileImg}
                                title={workData['obe-alphanumeric'].title}
                            />
                        </Flexbox>
                        <Flexbox className={classes.flexSmallRec} flexDirection="row">
                            <Flexbox className={classes.flexSmSqLeft}>
                                <ImageBox
                                    to='/aiga'
                                    imgSrc={workData['aiga'].profileImg}
                                    title={workData['aiga'].title}
                                />
                            </Flexbox>
                            <Flexbox className={classes.flexSmSqRight}>
                                <ImageBox
                                    to='/gms'
                                    imgSrc={workData['gms'].profileImg}
                                    title={workData['gms'].title}
                                />
                            </Flexbox>
                        </Flexbox>
                    </Flexbox>

                    <Flexbox flexDirection="column">
                        <Flexbox className={classes.flexSmallRec} flexDirection="row">
                            <Flexbox className={classes.flexSmSqLeft}>
                                <ImageBox
                                    to='/obe-fauxsaics'
                                    imgSrc={workData['obe-fauxsaics'].profileImg}
                                    title={workData['obe-fauxsaics'].title}
                                />
                            </Flexbox>
                            <Flexbox className={classes.flexSmSqRight}>
                                <ImageBox
                                    to='/ad-holiday'
                                    imgSrc={workData['ad-holiday'].profileImg}
                                    title={workData['ad-holiday'].title}
                                />
                            </Flexbox>
                        </Flexbox>
                        <Flexbox className={classes.flexSquare}>
                            <ImageBox
                                to='/nomz'
                                imgSrc={workData['nomz'].profileImg}
                                title={workData['nomz'].title}
                            />
                        </Flexbox>
                    </Flexbox>
                </Flexbox>
                <Flexbox className={classes.flexLgRec}>
                    <ImageBox
                        to='/fab-collection'
                        imgSrc={workData['fab-collection'].profileImg}
                        title={workData['fab-collection'].title}
                    />
                </Flexbox>
                <Flexbox>
                    <Flexbox className={classes.flexSquare}>
                        <ImageBox
                            to='/obe-whm'
                            imgSrc={workData['obe-whm'].profileImg}
                            title={workData['obe-whm'].title}
                        />
                    </Flexbox>
                    <Flexbox className={classes.flexSquare}>
                        <ImageBox
                            to='/firstleaf'
                            imgSrc={workData['firstleaf'].profileImg}
                            title={workData['firstleaf'].title}
                        />
                    </Flexbox>
                </Flexbox>
                <Flexbox>
                    <Flexbox className={classes.flexSquare}>
                        <ImageBox
                            to='/fab-printcollaterals'
                            imgSrc={workData['fab-printcollaterals'].profileImg}
                            title={workData['fab-printcollaterals'].title}
                        />
                    </Flexbox>
                    <Flexbox className={classes.flexSquare}>
                        <ImageBox
                            to='/obe-spreadlove'
                            imgSrc={workData['obe-spreadlove'].profileImg}
                            title={workData['obe-spreadlove'].title}
                        />
                    </Flexbox>
                </Flexbox>
            </Flexbox>
        </React.Fragment>
    );
});

const ImageBox = injectSheet(styleSheet)(({
    classes, to, imgSrc, title, key
}) => {
    return (
        <Link className={classes.linkBox} to={to} key={key}>
            <div className={classes.imgWrapper}>
                <img alt={`${title}`} className={classes.image} src={imgSrc} />
            </div>
            <p className={classes.imgTitle}>{title}</p>
        </Link>
    );
});

const onProps = {
    componentWillReceiveProps: (nextProps) => {
        if (window.pageYOffset !== 0) window.scroll(0, 0);
    },
    componentDidMount: () => {
        if (window.pageYOffset !== 0) window.scroll(0, 0);
    }
}

export default compose(
    lifecycle(onProps),
    pure,
    injectSheet(styleSheet),
)(windowDimensions()(Home));