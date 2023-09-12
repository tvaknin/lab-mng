import React, { useState } from 'react';

const UtilityPage = () => {
    const [pingResult, setPingResult] = useState(null);

    const buttonsNames = ["ping", "upgrade", "SSH connection", "ILO", "reset"];

    const handleButtonClick = async (name) => {
        if (name === 'ping') {
            try {
                const response = await fetch('http://localhost:1990/ping?ip=10.42.42.42'); // Assuming your server is running on the same domain/port
                if (response.ok) {
                    const data = await response.json();
                    const { pingable } = data;
                    setPingResult(pingable ? 'Pingable' : 'Not Pingable');
                } else {
                    setPingResult('Error');
                }
            } catch (error) {
                console.error('Error pinging:', error);
                setPingResult('Error');
            }
        } else {
            // Handle other button click actions here
        }
    };

    return (
        <div>
            {buttonsNames.map((name, index) => (
                <button
                    key={index}
                    style={{ color: 'white', background: '1b70fa' }}
                    onClick={() => handleButtonClick(name)}
                    data-mdb-ripple-radius="25"
                    type="button"
                    className="btn btn-primary mr-6"
                >
                    {name}
                </button>
            ))}
            {pingResult && <div>Ping Result: {pingResult}</div>}
        </div>
    );
};

export default UtilityPage;