import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';

import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#1a237e' }}>
        <div className="container-fluid">
          <img src={process.env.PUBLIC_URL + '/octofitapp-small.png'} alt="OctoFit Logo" style={{ height: 40, marginRight: 16 }} />
          <Link className="navbar-brand text-warning" to="/">OctoFit Tracker</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link text-info" to="/users">Users</Link></li>
              <li className="nav-item"><Link className="nav-link text-info" to="/teams">Teams</Link></li>
              <li className="nav-item"><Link className="nav-link text-info" to="/activities">Activities</Link></li>
              <li className="nav-item"><Link className="nav-link text-info" to="/leaderboard">Leaderboard</Link></li>
              <li className="nav-item"><Link className="nav-link text-info" to="/workouts">Workouts</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<Leaderboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
