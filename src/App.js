import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import DefaultLayout from './common/Layout/Layout';
import NewsGrid from './pages/NewsHome/NewsGrid';
const App = () =>{
  return(
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<NewsGrid />} />
        </Route>
    </Routes>
    </Router>
  );
};

export default App;