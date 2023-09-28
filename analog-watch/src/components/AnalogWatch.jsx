import React, { useState, useEffect } from 'react';

function AnalogWatch() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
  const hourDegrees = ((hours + minutes / 60) / 12) * 360;

  const secondHandStyle = {
    transform: `rotate(${90 + secondDegrees}deg)`,
  };

  const minuteHandStyle = {
    transform: `rotate(${90 + minuteDegrees}deg)`,
  };

  const hourHandStyle = {
    transform: `rotate(${90 + hourDegrees}deg)`,
  };

  return (
    <div className="w-64 h-64 relative border-4 border-gray-400">
      {/* Clock Face */}
      <div className="w-full h-full border-4 border-gray-700 rounded-full absolute top-0 left-0 transform translate-x-1/2 translate-y-1/2"></div>

      {/* Hour Hand */}
      <div
        className="h-1/2 w-2 bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full origin-bottom"
        style={hourHandStyle}
      ></div>

      {/* Minute Hand */}
      <div
        className="h-1/2 w-1 bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full origin-bottom"
        style={minuteHandStyle}
      ></div>

      {/* Second Hand */}
      <div
        className="h-1/2 w-1 bg-red-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full origin-bottom"
        style={secondHandStyle}
      ></div>
    </div>
  );
}

export default AnalogWatch;
