import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import store from '../src/store'
import {Provider, provider} from 'react-redux'

import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";

function App() {
  return (
    <Provider store={store}>
      

      <Router>
        <Routes>
          <Route path='*' element={<Error404/>}></Route>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </Router>
    </Provider>

  );
}

export default App;
