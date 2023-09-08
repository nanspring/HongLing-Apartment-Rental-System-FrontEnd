import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Application</h1>
        <Router>
          <Routes>
            < Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
