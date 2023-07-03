
import {createBrowserRouter} from 'react-router-dom'
import Layout from '../components/rayout'
import MainPage from '../pages/home' 
import DetailPage from '../pages/detail/detail' 
import QaPage from '../pages/qa/qa' 


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
      }
    ]
  }
])

export default router