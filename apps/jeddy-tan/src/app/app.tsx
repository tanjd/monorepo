import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from '@components/Footer';
import { Home } from '@pages/Home';

import '@styles/Home.css';

export function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
