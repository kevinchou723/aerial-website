import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import pure from 'recompose/pure';
import compose from 'recompose/compose';
import GridList, { GridListTile } from 'material-ui/GridList';
import Dimensions from 'react-dimensions'

const styleSheet = theme => ({
    gridContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    subGridTile: {
        backgroundColor: 'red',
        minWidth: 1000
    }
});

const Grid = ({ classes, images, containerWidth }) => {
    return (
        <div className={classes.gridContainer}>
            <GridList cellHeight={containerWidth/4} className={classes.gridList} spacing={20} cols={4}>
                {
                    images.map(img => {

                        //sorry for this ugly ass code, but this is to make grids within grids. Temporary
                        if(img.hasSubGrid){
                            return (
                                <GridListTile key={img.src} rows={img.rows || 1} cols={img.cols || 1}>
                                    {
                                        img.innerImgs.map((img) => {
                                            return (
                                                <GridListTile 
                                                    key={img.src}
                                                    rows={img.rows || 1}
                                                    cols={img.cols || 1}
                                                    style={{
                                                        height: img.height,
                                                        padding: img.padding
                                                    }}
                                                >
                                                    <img src={img.src} alt='img' />
                                                </GridListTile>
                                            );
                                        })
                                    }
                                </GridListTile>
                            );
                        }

                        if(img.hasBgWrapper){
                            return (
                                <GridListTile key={img.src} rows={img.rows || 1} cols={img.cols || 1}>
                                    <div className={classes.subGridTile}>
                                        <img src={img.src} alt='img' />
                                    </div>
                                </GridListTile>
                            );
                        }
                        
                        return (
                            <GridListTile key={img.src} rows={img.rows || 1} cols={img.cols || 1}>
                                <img src={img.src} alt='img' />
                            </GridListTile>
                        )
                    })
                }
            </GridList>
        </div>
    );
}

Grid.propTypes = {

}

Grid.defaultProps = {

}


export default compose(
    injectSheet(styleSheet),
    pure
)(Dimensions()(Grid));