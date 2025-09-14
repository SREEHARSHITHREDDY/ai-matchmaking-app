import React, { useState, useEffect } from 'react';

function App() {
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/participants')
            .then(res => res.json())
            .then(data => setParticipants(data));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">AI Matchmaking Participants</h1>
            <ul>
                {participants.map(p => (
                    <li key={p._id} className="border p-2 mb-2">
                        <h2 className="font-bold">{p.name}</h2>
                        <p>Goal: {p.goal}</p>
                        <p>Skills: AI {p.skills.AI}, Finance {p.skills.Finance}, Design {p.skills.Design}, Marketing {p.skills.Marketing}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
