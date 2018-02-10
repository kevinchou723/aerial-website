import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import pure from 'recompose/pure';
import compose from 'recompose/compose';
import branch from 'recompose/branch';
import lifecycle from 'recompose/lifecycle';
import { Link } from 'react-router-dom';
import { Panel, Grid } from '../../common';
import renderNothing from 'recompose/renderNothing';
import { pageNames, pageTitles } from '../constants';

const styleSheet = theme => ({
    topSection:{
        marginBottom: '5%',
        color: theme.palette.primaryColor,
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
        marginTop: 120,
        paddingTop: 40,
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
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    prevLinkButton: {
        visibility: ({ prevPage }) => prevPage ? 'visible' : 'hidden',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
            boxSizing: 'border-box',
            borderRight: `2px solid ${theme.palette.primaryColor}`,
            width: '50%'
        }
    },
    nextLinkButton: {
        visibility: ({ nextPage }) => nextPage ? 'visible' : 'hidden',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
            boxSizing: 'border-box',
            width: '50%',
            borderLeft: ({ prevPage }) => {
                return prevPage ? 'none' : `2px solid ${theme.palette.primaryColor}`;
            }
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

const branchProp = branch(
    ({ workType, workData }) => {
        return workType != '' && workData[workType] != undefined
    },
    Work => Work,
    renderNothing
);

const Work = ({
    classes, workType, workData
}) => {

    const work = workData[workType];
    const isMobile = window.innerWidth < 600;
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
            {work.subNote && <p className={classes.subNote}>{work.subNote}</p>}
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
                <p className={classes.description}>{work.description}</p>
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
            <Link className={classes.nextLinkButton} to={`/${nextPage}`}>
                <div className={classes.linkText}>
                    {pageTitles[nextPage]}
                </div>
                <div className={classes.nextArrow} />
            </Link>
        </div>
    );
})


Work.propTypes = {

}

Work.defaultProps = {

}

const onProps = {
    componentWillReceiveProps: (nextProps) => {
        if (window.pageYOffset !== 0) window.scroll(0, 0);
    }
}

export default compose(
    injectSheet(styleSheet),
    branchProp,
    lifecycle(onProps),
    pure
)(Work);