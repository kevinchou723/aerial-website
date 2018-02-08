import workData from './workData';

const INITIAL_STATE = {
    workData: workData,
    navData: [
        'fab-holiday',
        'fab-selectedkits',
        'fab-hellofab',
        'fab-printad',
        'fab-webredesign',
        'fab-collection',
        'ppf',
        'nomz',
        'gms',
        'ad-holiday',
        'aiga',
        'firstleaf'
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}