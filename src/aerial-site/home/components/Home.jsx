import React from 'react';
import injectSheet from 'react-jss';
import pure from 'recompose/pure';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import { Panel } from '../../common';
import Flexbox from 'flexbox-react';
import { Link } from 'react-router-dom';
import { pageNames } from '../../work/constants';

const styleSheet = theme => ({
    mainFlexBox:{
        justifyContent: 'space-between'
    },
    linkBox:{
        textDecoration: 'none',
        color: theme.palette.primaryColor,
        '&:hover':{
            color: theme.palette.black,
            opacity: 0.9
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
        padding: '15px 0',
        fontWeight: 300,
        fontSize: '0.85em',
        [theme.breakpoints.down('xs')]: {
            padding: '1em 2.5em 1.5em 2.5em',
            fontSize: '1em',
            fontWeight: 500
        }
    },
    flexSquare: {
        margin: '0 10px',
        '& img': {
            maxWidth: 490,
            maxHeight: 490
        },
        [theme.breakpoints.down('xs')]: {
            padding: 0,
            margin: 0
        }
    },
    flexSmallRec:{
        margin: '0 10px',
        '& img': {
            maxWidth: 490,
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
}) => {
    const isMobile = window.innerWidth <= 600;
    return (
        <Panel>
            <Flexbox className={classes.mainFlexBox}>
                {isMobile ? <MobileHomeGrid workData={workData} /> : <DesktopHomeGrid workData={workData}/> }
            </Flexbox>
        </Panel>
    );
};

const MobileHomeGrid = injectSheet(styleSheet)(({
    classes, workData
}) => {
    return (
        <Flexbox flexDirection="column">
            {
                pageNames.map((pageName) => {
                    return (
                        <Flexbox key={pageName} className={classes.flexSquare}>
                            <ImageBox
                                key={pageName}
                                to={`/${pageName}`}
                                imgSrc={workData[pageName].mobileProfileImg}
                                title={workData[pageName].title}
                            />
                        </Flexbox>
                    )
                })
            }
        </Flexbox>
    );
});

const DesktopHomeGrid = injectSheet(styleSheet)(({
    classes, workData
}) => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
});

const ImageBox = injectSheet(styleSheet)(({
    classes, to, imgSrc, title, key
}) => {
    return (
        <Link className={classes.linkBox} to={to} key={key}>
            <div className={classes.imgWrapper}>
                <img alt='img' className={classes.image} src={imgSrc} />
            </div>
            <p className={classes.imgTitle}>{title}</p>
        </Link>
    );
});

const onProps = {
    componentWillReceiveProps: (nextProps) => {
        if (window.pageYOffset !== 0) window.scroll(0, 0);
    },
    componentDidMount: () => {
        if (window.pageYOffset !== 0) window.scroll(0, 0);
    }
}

export default compose(
    injectSheet(styleSheet),
    lifecycle(onProps),
    pure
)(Home);