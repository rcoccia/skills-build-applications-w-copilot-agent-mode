import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://humble-waddle-xgxjxq9wgw36wvj-8000.app.github.dev/api/workouts/')
      .then(res => res.json())
      .then(data => setWorkouts(data));
  }, []);

  return (
    <div className="container">
      <h2 className="my-4">Workouts</h2>
      <div className="card">
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>User Email</th>
                <th>Workout Type</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((workout, idx) => (
                <tr key={idx}>
                  <td>{workout.user_email}</td>
                  <td>{workout.workout_type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Workouts;
