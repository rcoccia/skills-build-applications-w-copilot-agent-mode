import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://humble-waddle-xgxjxq9wgw36wvj-8000.app.github.dev/api/teams/')
      .then(res => res.json())
      .then(data => setTeams(data));
  }, []);

  return (
    <div className="container">
      <h2 className="my-4">Teams</h2>
      <div className="card">
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, idx) => {
                let members = team.members;
                if (typeof members === 'string') {
                  try {
                    members = JSON.parse(members.replace(/'/g, '"'));
                  } catch {
                    members = [members];
                  }
                }
                return (
                  <tr key={idx}>
                    <td>{team.name}</td>
                    <td>{Array.isArray(members) ? members.join(', ') : members}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Teams;
