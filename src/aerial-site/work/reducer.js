import workData from './workData';

const INITIAL_STATE = {
    workData: workData
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}