import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/routing';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import theme from './styled/theme';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </Provider>
  )
}
export default App;
