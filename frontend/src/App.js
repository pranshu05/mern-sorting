import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Articles from './pages/Articles'

function App() {

const id = new URLSearchParams(window.location.search).get("id")

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route 
              path="/Articles" 
              element={<Articles />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

