import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import pure from 'recompose/pure';
import compose from 'recompose/compose';
import Masonry from 'react-masonry-component';

const styleSheet = theme => ({
    gridContainer: {
        margin: '5em'
    },
    image:{
        width: '100%'
    }
});

const Grid = ({
    classes, images
}) => (
    <Masonry
        className={classes.gridContainer}
        options={{
            columnWidth: 200,
            // itemSelector: '.grid-item'
        }}
    >
        {
            images.map((img) => {
                return (
                    // <Image
                    //     src={img.src}
                    // />
                    <img className={classes.image} alt='img' src={img.src} />
                );
            })
        }
    </Masonry>
);


// const Image = injectSheet(styleSheet)(({
//     classes, src
// }) => (
//         <img alt='img' src={src} />
// ));

Grid.propTypes = {

}

Grid.defaultProps = {

}


export default compose(
    injectSheet(styleSheet),
    pure
)(Grid);