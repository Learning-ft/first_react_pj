import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/routing';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import theme from './styled/theme';
import { ThemeProvider } from 'styled-components';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>

export default App;
