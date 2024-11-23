
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Paste from './Components/Paste'
import Navbar from './Components/Navbar'
import ViewPaste from './Components/ViewPaste'
import { Toaster } from 'react-hot-toast';
function App() {
 
  const router = createBrowserRouter(
    [
      {
        path:"https://paste-app-khaki.vercel.app/",
        element:
        <div>
        <Navbar/>
          <Home/>
        </div>
      },
      {
        path:"https://paste-app-khaki.vercel.app/pastes",
        element:
        <div>
          <Navbar/>
          <Paste/>
        </div>
      },
      {
        path:"https://paste-app-khaki.vercel.app/pastes/:id",
        element:
        <div>
          <Navbar/>
          <ViewPaste/>
        </div>
      },
    ]
  )

 

  return (
    <div>
      <RouterProvider router={router}/>
      <Toaster />
    </div>
  )
}

export default App
