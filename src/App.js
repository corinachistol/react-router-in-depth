import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

//pages
import Home from './pages/Home.js';
import About from './pages/About.js';
import Faq from './pages/help/Faq.js';
import Contact from './pages/help/Contact.js';

//layout
import RootLayout from './layouts/RootLayout.js';
import HelpLayout from './layouts/HelpLayout.js';
import NotFound from './pages/NotFound.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path ="help" element={<HelpLayout/>}>
        <Route path="faq" element={<Faq/>}/> 
        <Route path="contact" element={<Contact/>}/> 
      </Route>

      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
)

export default  function App() {
  return (
    <RouterProvider router={router}/>
  );
}

