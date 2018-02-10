import { connect } from 'react-redux';
import { MobileMenu } from '../components';
import {
    setMobileMenuOpen
} from '../../home/actions';

const mapStateToProps = state => {
    return {
        isMobileMenuOpen: state.home.isMobileMenuOpen
    }
}

const mapDispatchToProps = (dispatch) => ({
    setMobileMenuOpen: (isOpen) => {
        return dispatch(setMobileMenuOpen(isOpen));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu);
