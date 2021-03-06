import { connect } from 'react-redux';
import { Work } from '../components'

const mapStateToProps = state => {
    return {
        workData: state.work.workData
    }
}

export default connect(mapStateToProps)(Work);
