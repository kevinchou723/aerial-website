import React from 'react';
import injectSheet from 'react-jss';
import { Link, Redirect } from 'react-router-dom';
import windowDimensions from 'react-window-dimensions';
import pure from 'recompose/pure';
import compose from 'recompose/compose';
import branch from 'recompose/branch';
import lifecycle from 'recompose/lifecycle';
import withProps from 'recompose/withProps';
import { Panel, Grid } from '../../common';
import { pageNames, pageTitles } from '../constants';

const styleSheet = theme => ({
    topSection:{
        margin: '0 0 5% 0',
        color: theme.palette.primaryColor,
        [theme.breakpoints.between('sm','sm')]: {
            margin: '0 3em 5% 3em'
        },
        [theme.breakpoints.down('xs')]:{
            padding: '0 2.5em'
        }
    },
    title:{
        marginBottom: 15,
        [theme.breakpoints.down('xs')]: {
            marginBottom: 10,
            lineHeight: 1.5
        }
    },
    description:{
        fontSize: '1.25em',
        lineHeight: '1.5',
        fontWeight: 300
    },
    forMore: {
        display: 'block'
    },
    forMoreAnchor: {
        textDecoration: 'none',
        fontWeight: 700,
        color: theme.palette.primaryColor,
    },
    infoWrapper:{
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
    },
    leftInfo: {
        width: '65%',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            margin: '10px 0'
        }
    },
    rightInfo: {
        marginLeft: '9%',
        lineHeight: 1.5,
        [theme.breakpoints.down('xs')]: {
            margin: '10px 0',
            lineHeight: 1.75
        }
    },
    infoTitle: {
        fontWeight: 700
    },
    navigationContainer:{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '3em',
        padding: '3em 0',
        borderTop: `2px solid ${theme.palette.secondaryColor}`,
        [theme.breakpoints.down('xs')]:{
            margin: 0,
            border: 'none'
        }
    },
    prevArrow:{
        width: 10,
        height: 10,
        display: 'inline-block',
        borderWidth: '2px 0 0 2px',
        borderStyle: 'solid',
        borderColor: theme.palette.primaryColor,
        transform: 'rotate(-45deg)',
        marginRight: 25,
        [theme.breakpoints.between('sm','sm')]: {
            verticalAlign: 'middle'
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    nextArrow:{
        width: 10,
        height: 10,
        display: 'inline-block',
        borderWidth: '2px 0 0 2px',
        borderStyle: 'solid',
        borderColor: theme.palette.primaryColor,
        transform: 'rotate(135deg)',
        marginLeft: 25,
        [theme.breakpoints.between('sm','sm')]: {
            verticalAlign: 'middle'
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    divider: {
        [theme.breakpoints.down('xs')]: {
            width: 2,
            height: 50,
            backgroundColor: theme.palette.primaryColor
        }
    },
    prevLinkButton: {
        visibility: ({ prevPage }) => prevPage ? 'visible' : 'hidden',
        width: '50%',
        textAlign: 'left',
        textDecoration: 'none',
        [theme.breakpoints.between('sm','sm')]: {
            paddingLeft: '3em'
        },
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 50,
            boxSizing: 'border-box',
        }
    },
    nextLinkButton: {
        visibility: ({ nextPage }) => nextPage ? 'visible' : 'hidden',
        width: '50%',
        textAlign: 'right',
        textDecoration: 'none',
        [theme.breakpoints.between('sm', 'sm')]: {
            paddingRight: '3em'
        },
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 50,
        }
    },
    linkText:{
        display: 'inline-block',
        textDecoration: 'none',
        fontWeight: 700,
        fontSize: '1.2em',
        color: theme.palette.primaryColor,
        '&:hover': {
            color: theme.palette.black
        },
        [theme.breakpoints.between('sm','sm')]: {
            width: '75%',
            verticalAlign: 'middle'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1em',
            textAlign: 'center',
            padding: '0 1.1em',
            lineHeight: 1.5
        }
    },
    subNote:{
        fontWeight: 300,
        color: theme.palette.primaryColor,
        marginTop: 15,
        [theme.breakpoints.down('xs')]: {
            margin: 0,
            borderBottom: `1px solid ${theme.palette.secondaryColor}`,
            padding: '1.5em 2.5em',
            lineHeight: 1.5
        }
    }
});

const RedirectToHome = withProps({ to: '/' })(Redirect);

const branchProp = branch(
    ({ workType, workData }) => workType !== '' && workData[workType] !== undefined,
    Work => Work,
    () => RedirectToHome
);

const Work = ({
    classes, workType, workData, theme, width
}) => {
    const work = workData[workType];
    const isMobile = width <= theme.breakpoints.values.sm;
    const currentIndex = pageNames.findIndex((nav) => nav === workType);
    const prevPage = pageNames[currentIndex - 1];
    const nextPage = pageNames[currentIndex + 1];
    const images = isMobile ? work.mobileImages : work.images;
    return (
        <Panel>
            <div className={classes.topSection}>
                <h2 className={classes.title}>{work.title}</h2>
                <Info work={work}/>
            </div>
            <Grid images={images} isMobile={isMobile}/>
            { work.subNote && <p className={classes.subNote}>{work.subNote}</p> }
            <Navigation nextPage={nextPage} prevPage={prevPage}/>
        </Panel>
    );
};

const Info = injectSheet(styleSheet)(({
    classes, work
}) => {
    return (
        <div className={classes.infoWrapper}>
            <div className={classes.leftInfo}>
                <p className={classes.description}>
                    {work.description}
                    {
                        work.forMore &&
                        <i className={classes.forMore}>
                            {work.forMore.text}
                            <a className={classes.forMoreAnchor} href={work.forMore.link} target="_blank" rel="noopener noreferrer">
                                {work.forMore.linkText}
                            </a>
                        </i>
                    }
                </p>
            </div>
            <div className={classes.rightInfo}>
                {work.client && <div><span className={classes.infoTitle}>Client: </span>{work.client}</div>}
                {work.digitalAgency && <div><span className={classes.infoTitle}>Digital Agency: </span>{work.digitalAgency}</div>}
                {work.designAgency && <div><span className={classes.infoTitle}>Design Agency: </span>{work.designAgency}</div>}
                {work.creativeDirection && <div><span className={classes.infoTitle}>Creative Direction: </span>{work.creativeDirection}</div>}
                {work.role && <div><span className={classes.infoTitle}>Role: </span>{work.role}</div>}
            </div>
        </div>
    );
});

const Navigation = injectSheet(styleSheet)(({
    classes, nextPage, prevPage
})=> {
    return (
        <div className={classes.navigationContainer}>
            <Link className={classes.prevLinkButton} to={`/${prevPage}`}>
                <div className={classes.prevArrow} />
                <div className={classes.linkText}>
                    {pageTitles[prevPage]}
                </div>
            </Link>
            <div className={classes.divider}/>
            <Link className={classes.nextLinkButton} to={`/${nextPage}`}>
                <div className={classes.linkText}>
                    {pageTitles[nextPage]}
                </div>
                <div className={classes.nextArrow} />
            </Link>
        </div>
    );
})


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
    branchProp,
    injectSheet(styleSheet),
)(windowDimensions()(Work));