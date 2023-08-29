import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout/Main';
import Home from './Pages/Home';
import UseEffect from './Pages/UseEffect';
import UseState from './Pages/UseState';
import UseRef from './Pages/UseRef';
import NotFoundPage from './Pages/404';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/use-effect" element={<UseEffect />} />
          <Route path="/use-state" element={<UseState />} />
          <Route path="/use-ref" element={<UseRef />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
