import { connect } from 'react-redux';
import { Home } from '../components';

const mapStateToProps = state => {
    return {
        workData: state.work.workData
    }
}

export default connect(mapStateToProps)(Home);
