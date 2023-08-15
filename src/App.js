import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import RootLayout from './Layouts/RootLayout';
import About from './screens/About';
import Home from './screens/Home';
import ContactLayout from './Layouts/ContactLayout';
import Phone from './screens/Phone';
import Mail from './screens/Mail';
import PageNotFound from './screens/PageNotFound';
import Careers, { CareerLoader } from './screens/Careers';
import CareerLayout from './Layouts/CareerLayout';
import CareerError from './screens/CareerError';
import CareerDetail, { JobDetailLoader } from './screens/CareerDetail';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
       <Route path='contact' element={<ContactLayout/>}>
          <Route path='mail' element={<Mail/>}/>
          <Route path='Phone' element={<Phone/>}/>
       </Route>
       <Route path='careers' element={<CareerLayout/>} errorElement={<CareerError/>} >
        <Route index element={<Careers/>} loader={CareerLoader} />
        <Route path=':id' element={<CareerDetail/>} loader={JobDetailLoader} />

       </Route>
       <Route path='*' element={<PageNotFound/>}/>
    </Route>
  )
)

function App() {
    return <RouterProvider router={router} />
}

export default App;
