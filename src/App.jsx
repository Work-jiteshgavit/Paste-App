
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Paste from './Components/Paste'
import Navbar from './Components/Navbar'
import ViewPaste from './Components/ViewPaste'
import { Toaster } from 'react-hot-toast';
function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
        </div>
      ),
    },
    {
      path: "/pastes",
      element: (
        <div>
          <Navbar />
          <Paste />
        </div>
      ),
    },
    {
      path: "/pastes/:id",
      element: (
        <div>
          <Navbar />
          <ViewPaste />
        </div>
      ),
    },
    {
      path: "*",
      element: (
        <div>
          <Navbar />
          <h1>404 - Page Not Found</h1>
        </div>
      ),
    },
  ]);
  

  return (
    <div>
      <RouterProvider router={router}/>
      <Toaster />
    </div>
  )
}

export default App
