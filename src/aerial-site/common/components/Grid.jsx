import React from 'react';
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
        backgroundColor: theme.palette.holidayRed,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subGridImg:{
        width: '50%',
        margin: '15% 0'
    }
});

const Grid = ({ classes, images, isMobile, containerWidth }) => {

    const cellHeight = isMobile ? window.innerWidth : (containerWidth/4);
    const columns = isMobile ? 1 : 4;
    
    return (
        <div className={classes.gridContainer}>
            <GridList cellHeight={cellHeight} className={classes.gridList} spacing={20} cols={columns}>
                {
                    images.map(img => {

                        //sorry for this ugly ass code, but this is to make grids within grids. Temporary
                        if(img.hasSubGrid){
                            return (
                                <GridListTile key={Math.floor(Math.random() * 9999)} rows={img.rows || 1} cols={img.cols || 1}>
                                    {
                                        img.innerImgs.map((img) => {
                                            return (
                                                <GridListTile 
                                                    key={Math.floor(Math.random() * 9999)}
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
                                <GridListTile style={{
                                    height: 'auto'
                                }} key={Math.floor(Math.random() * 9999)} rows={img.rows || 1} cols={img.cols || 1}>
                                    <div className={classes.subGridTile}>
                                        <img className={classes.subGridImg} src={img.src} alt='img' />
                                    </div>
                                </GridListTile>
                            );
                        }
                        
                        return (
                            <GridListTile key={Math.random()} rows={img.rows || 1} cols={img.cols || 1}>
                                <img src={img.src} alt='img' />
                            </GridListTile>
                        )
                    })
                }
            </GridList>
        </div>
    );
}


export default compose(
    injectSheet(styleSheet),
    pure
)(Dimensions()(Grid));