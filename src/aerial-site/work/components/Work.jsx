import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import pure from 'recompose/pure';
import compose from 'recompose/compose';
import branch from 'recompose/branch';
import { Link } from 'react-router-dom';
import { Panel, Grid } from '../../common';
import renderNothing from 'recompose/renderNothing';

const styleSheet = theme => ({
    topSection:{},
    title:{},
    description:{}
});

const branchProp = branch(
    ({ workType, workData }) => workType != '' && workData[workType] != undefined,
    Work => Work,
    renderNothing
);

const Work = ({
    classes, workType, workData
}) => {
    const work = workData[workType];
    
    return (
        <Panel>
            <div className={classes.topSection}>
                <h2 className={classes.title}>{work.title}</h2>
                <p className={classes.description}>{work.description}</p>
            </div>
            <Grid images={work.images}/>
        </Panel>
    );
};



Work.propTypes = {

}

Work.defaultProps = {

}


export default compose(
    injectSheet(styleSheet),
    branchProp,
    pure
)(Work);