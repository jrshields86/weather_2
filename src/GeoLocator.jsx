import React, { useState } from 'react';

export default function GeoLocator({ onLocate }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClick = () => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported in this browser.');
      return;
    }
    setLoading(true);
    setError('');
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setLoading(false);
        onLocate(coords.latitude, coords.longitude);
      },
      (err) => {
        setLoading(false);
        // e.g. “User denied geolocation” or “timeout”
        setError(err.message || 'Unable to get your location.');
      },
      {
        enableHighAccuracy: true,
        timeout: 10_000,       // 10s timeout
        maximumAge: 60_000,    // allow 1m-old cached position
      }
    );
  };

  return (
    <div style={{ margin: '1rem 0' }}>
      <button onClick={handleClick} disabled={loading}>
        {loading ? 'Detecting location…' : 'Use My Location'}
      </button>
      {error && <p style={{ color: 'red', marginTop: 8 }}>{error}</p>}
    </div>
  );
}
