import Home from "./Components/Home"

import Sidebar from './Components/Sidebar';
import {Outlet, createBrowserRouter} from 'react-router-dom'
import About from './Components/About';
import Cart from './Components/Cart';

function App() {
  return (
    <>
      <div className="flex flex-row">
      <Sidebar/>
      <Outlet/>
      </div>
    </>
  );
}

export const AppRoute=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/cart',
        element:<Cart/>
      }
    ]
  }
])

export default App;
