
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import About from './Components/About';
import { Routes,Route} from 'react-router-dom';
import Navbarr from './Components/Navbar';
import PageNotFound from './Components/PageNotFound';
import UsersPage from './Components/UsersPage';
import Api from './Components/Api';
import PostMethod from './Components/PostMethod';
import Deletemethod from './Components/Deletemethod';
import SearchFilter from './Components/SearchFilter';
import Axios from './Components/Axios';
import Contact from './Components/Contact/Contact';
import DataPosted from './Components/DataPosted';



function App() {
 
  return (
    <>
      <Navbarr />
      <Routes>
      <Route path="/" element={<Home />} />
   <Route path="/about" element={<About />} />
   <Route path="/api" element={<Api />} />
   <Route path="/drawer" element={<Deletemethod />} />
   <Route path="/postmethod" element={<PostMethod />} />
   <Route path="/posteddata" element={<DataPosted />} />
   <Route path="/searchfilter" element={<SearchFilter />} />
   <Route path="/axios" element={<Axios />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/user/:name" element={<UsersPage />} />
   <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
