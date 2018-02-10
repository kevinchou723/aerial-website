import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from './aerial-site/core/createStore';
import { ThemeProvider } from 'react-jss';
import { createMuiTheme } from 'material-ui/styles';
import theme from './theme';
import App from './aerial-site/App';

const Root = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ThemeProvider theme={createMuiTheme(theme)}>
                <App />
            </ThemeProvider>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
