import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { APIProvider } from '@vis.gl/react-google-maps';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <APIProvider apiKey={'AIzaSyCnntA8vhN5Ter0nA0--b8wGxAyev1MMtU'}>
                <App />
            </APIProvider>
        </Provider>
    </BrowserRouter>,
);

reportWebVitals();
