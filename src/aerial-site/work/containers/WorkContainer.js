import { connect } from 'react-redux';
// import { push } from 'react-router-redux';
import { Work } from '../components'

const mapStateToProps = state => {
    return {
        workData: state.work.workData
    }
}

// const mapDispatchToProps = dispatch => ({
//     redirectHome: (event) => {
//         return dispatch(push('/'));
//     }
// });

export default connect(mapStateToProps)(Work);
