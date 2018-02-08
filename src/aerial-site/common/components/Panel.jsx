import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import pure from 'recompose/pure';
import compose from 'recompose/compose';

const styleSheet = theme => ({
    panelContainer: {
        margin: '5em auto',
        maxWidth: 1000
    }
});

const Panel = ({
    classes, children
}) => (
        <div className={classes.panelContainer}>
            { children }
        </div>
    );

Panel.propTypes = {

}

Panel.defaultProps = {

}


export default compose(
    injectSheet(styleSheet),
    pure
)(Panel);