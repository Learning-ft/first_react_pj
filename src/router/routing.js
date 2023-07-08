
import {createBrowserRouter} from 'react-router-dom'
import Layout from '../components/rayout'
import MainPage from '../pages/home' 
import DetailPage from '../pages/detail/detail' 
import QaPage from '../pages/qa/qa' 
import Login from '../pages/home/Login/siginIn'
import SignUp from '../pages/home/Login/siginUp'


const router = createBrowserRouter([
  {
    element: <Layout/>,
    children : [
      {
        path: '/',
        element: <MainPage/>
      },
      {
        path: '/DetailPage',
        element: <DetailPage/>
      },
      {
        path: '/QaPage',
        element: <QaPage/>
      },
      {
        path: '/Login',
        element: <Login/>
      },
      {
        path: '/SignUp',
        element: <SignUp/>
      },
    ]
  }
])

export default router