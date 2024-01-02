import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

//pages
import Home from './pages/Home.js';
import About from './pages/About.js';

//layout
import RootLayout from './layouts/RootLayout.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
)

export default  function App() {
  return (
    <RouterProvider router={router}/>
  );
}

