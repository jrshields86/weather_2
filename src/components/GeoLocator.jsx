import React, { useState } from 'react';

export default function GeoLocator({ onLocate }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClick = () => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported.');
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
        setError(err.message || 'Unable to get your location.');
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
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
