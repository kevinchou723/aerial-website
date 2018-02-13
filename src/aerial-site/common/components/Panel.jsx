import React from 'react';
import injectSheet from 'react-jss';
import pure from 'recompose/pure';
import compose from 'recompose/compose';

const styleSheet = theme => ({
    panelContainer: {
        margin: '5em auto',
        maxWidth: 1000,
        [theme.breakpoints.down('xs')]:{
            margin: '2em auto'
        }
    }
});

const Panel = ({
    classes, children
}) => (
        <div className={classes.panelContainer}>
            { children }
        </div>
    );


export default compose(
    injectSheet(styleSheet),
    pure
)(Panel);