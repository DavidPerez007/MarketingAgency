import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import store from '../src/store'
import {Provider, provider} from 'react-redux'
import Error404 from "containers/errors/Error404";
import { Home, Careers, About, Contact, Cases, Blog, Services } from 'containers/pages';




function App() {
  return (
    <Provider store={store}>
    
      <Router>
        <Routes>
          <Route path='*' element={<Error404/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cases' element={<Cases/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/careers' element={<Careers/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </Router>
    </Provider>

  );
}

export default App;
