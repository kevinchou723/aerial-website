import React from 'react';
import injectSheet from 'react-jss';
import pure from 'recompose/pure';
import compose from 'recompose/compose';
import { Panel } from '../../common';
import Flexbox from 'flexbox-react';
import { Link } from 'react-router-dom';

const styleSheet = theme => ({
    mainFlexBox:{
        justifyContent: 'center'
    },
    linkBox:{
        textDecoration: 'none',
        color: theme.palette.primaryColor,
        '&:hover':{
            color: theme.palette.black
        }
    },
    image: {
        width: "100%",
        height: '100%'
    },
    imgTitle:{
        minHeight: 35,
        display: 'flex',
        alignItems: 'flex-start',
        paddingTop: 15,
        fontWeight: 300,
        fontSize: '0.85em'
    },
    flexSquare: {
        padding: 10,
        '& img': {
            maxWidth: 480,
            maxHeight: 480
        }
    },
    flexSmallRec:{
        padding: 10,
        '& img': {
            maxWidth: 480
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

const Home = ({
    classes, workData
}) => (
    <Panel>
        <Flexbox className={classes.mainFlexBox}>
            <Flexbox flexDirection="column">
                <Flexbox className={classes.flexSquare}>
                    <ImageBox
                        to='/fab-holiday'
                        imgSrc={workData['fab-holiday'].profileImg}
                        title={workData['fab-holiday'].title}
                    />
                </Flexbox>
                <Flexbox className={classes.flexSmallRec}>
                    <ImageBox
                        to='/fab-hellofab'
                        imgSrc={workData['fab-hellofab'].profileImg}
                        title={workData['fab-hellofab'].title}
                    />
                </Flexbox>
                <Flexbox className={classes.flexSquare}>
                    <ImageBox
                        to='/fab-webredesign'
                        imgSrc={workData['fab-webredesign'].profileImg}
                        title={workData['fab-webredesign'].title}
                    />
                </Flexbox>
                <Flexbox className={classes.flexSquare}>
                    <ImageBox
                        to='/ppf'
                        imgSrc={workData['ppf'].profileImg}
                        title={workData['ppf'].title}
                    />
                </Flexbox>
                <Flexbox className={classes.flexSmallRec} flexDirection="row">
                    <Flexbox className={classes.flexSmSqLeft}>
                        <ImageBox
                            to='/ad-holiday'
                            imgSrc={workData['ad-holiday'].profileImg}
                            title={workData['ad-holiday'].title}
                        />
                    </Flexbox>
                    <Flexbox className={classes.flexSmSqRight}>
                        <ImageBox
                            to='/aiga'
                            imgSrc={workData['aiga'].profileImg}
                            title={workData['aiga'].title}
                        />
                    </Flexbox>
                </Flexbox>
            </Flexbox>

            <Flexbox flexDirection="column">
                <Flexbox className={classes.flexSmallRec}>
                    <ImageBox
                        to='/fab-selectedkits'
                        imgSrc={workData['fab-selectedkits'].profileImg}
                        title={workData['fab-selectedkits'].title}
                    />
                </Flexbox>
                <Flexbox className={classes.flexSquare}>
                    <ImageBox
                        to='/fab-printad'
                        imgSrc={workData['fab-printad'].profileImg}
                        title={workData['fab-printad'].title}
                    />
                </Flexbox>
                <Flexbox className={classes.flexSquare}>
                    <ImageBox
                        to='/fab-collection'
                        imgSrc={workData['fab-collection'].profileImg}
                        title={workData['fab-collection'].title}
                    />
                </Flexbox>
                <Flexbox className={classes.flexSmallRec} flexDirection="row">
                    <Flexbox className={classes.flexSmSqLeft}>
                        <ImageBox
                            to='/nomz'
                            imgSrc={workData['nomz'].profileImg}
                            title={workData['nomz'].title}
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
                <Flexbox className={classes.flexSquare}>
                    <ImageBox
                        to='/firstleaf'
                        imgSrc={workData['firstleaf'].profileImg}
                        title={workData['firstleaf'].title}
                    />
                </Flexbox>
            </Flexbox>
        </Flexbox>
    </Panel>
);

const ImageBox = injectSheet(styleSheet)(({
    classes, to, imgSrc, title
}) => {
    return (
        <Link className={classes.linkBox} to={to}>
            <div className={classes.imgWrapper}>
                <img alt='img' className={classes.image} src={imgSrc} />
            </div>
            <p className={classes.imgTitle}>{title}</p>
        </Link>
    );
});

export default compose(
    injectSheet(styleSheet),
    pure
)(Home);