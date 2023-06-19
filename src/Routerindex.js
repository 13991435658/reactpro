import {useRoutes} from 'react-router-dom'
import Login from './login/Login'
import Box from './Box/Box'
export default function Routerindex() {
  return useRoutes([
    {
        path:'/login',
        element:<Login/>
    },
    {
      path:'/box',
      element:<Box/>
    }
  ])
}
