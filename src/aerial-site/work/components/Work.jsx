import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import pure from 'recompose/pure';
import compose from 'recompose/compose';
import branch from 'recompose/branch';
import { Link } from 'react-router-dom';
import { Panel, Grid } from '../../common';
import renderNothing from 'recompose/renderNothing';
import { pageNames, pageTitles } from '../constants';

const styleSheet = theme => ({
    topSection:{
        marginBottom: '5%'
    },
    title:{
        marginBottom: 15
    },
    description:{
        fontSize: '1.25em',
        lineHeight: '1.5',
        fontWeight: 300
    },
    infoWrapper:{
        display: 'flex'
    },
    leftInfo: {
        width: '65%'
    },
    rightInfo: {
        marginLeft: '9%',
        lineHeight: '1.5'
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
        borderTop: `2px solid ${theme.palette.secondaryColor}`
    },
    prevArrow:{
        width: 10,
        height: 10,
        display: 'inline-block',
        borderWidth: '2px 0 0 2px',
        borderStyle: 'solid',
        borderColor: theme.palette.primaryColor,
        transform: 'rotate(-45deg)',
        marginRight: 25
    },
    nextArrow:{
        width: 10,
        height: 10,
        display: 'inline-block',
        borderWidth: '2px 0 0 2px',
        borderStyle: 'solid',
        borderColor: theme.palette.primaryColor,
        transform: 'rotate(135deg)',
        marginLeft: 25
    },
    prevLinkButton: {
        visibility: ({prevPage}) => prevPage ? 'visible' : 'hidden'
    },
    nextLinkButton: {
        visibility: ({ nextPage }) => nextPage ? 'visible' : 'hidden'
    },
    linkText:{
        display: 'inline-block',
        textDecoration: 'none',
        fontWeight: 700,
        fontSize: '1.2em',
        color: theme.palette.primaryColor,
        '&:hover': {
            color: theme.palette.black
        }
    }
});

const branchProp = branch(
    ({ workType, workData }) => workType != '' && workData[workType] != undefined,
    Work => Work,
    renderNothing
);

const Work = ({
    classes, workType, workData
    }) => {
    window.scroll(0, 0);
    const work = workData[workType];
    const currentIndex = pageNames.findIndex((nav) => nav === workType);
    const prevPage = pageNames[currentIndex - 1];
    const nextPage = pageNames[currentIndex + 1];

    return (
        <Panel>
            <div className={classes.topSection}>
                <h2 className={classes.title}>{work.title}</h2>
                <Info work={work}/>
            </div>
            <Grid images={work.images}/>
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
            <Link className={classes.prevLinkButton} to={`/work/${prevPage}`}>
                <div className={classes.prevArrow} />
                <div className={classes.linkText}>
                    {pageTitles[prevPage]}
                </div>
            </Link>
            <Link className={classes.nextLinkButton} to={`/work/${nextPage}`}>
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


export default compose(
    injectSheet(styleSheet),
    branchProp,
    pure
)(Work);