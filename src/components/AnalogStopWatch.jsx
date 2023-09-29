import React, { useState, useEffect } from 'react';
const AnalogStopWatch=()=> {
  
  const [time, setTime] = useState(new Date());
  const [userTime, setUserTime] = useState('');
 

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getHandRotation = (unit, max) => {
    const value = time[`get${unit}`]();
    return (value % max) * (360 / max);
  };

  const updateStopwatch = () => {
    const userDate = new Date(userTime);
    if (!isNaN(userDate.getTime())) {
      setTime(userDate);
    }
  };


  const secondHandStyle = {
    transform: `rotate(${getHandRotation('Seconds', 60)}deg)`,
  };

  const minuteHandStyle = {
    transform: `rotate(${getHandRotation('Minutes', 60)}deg)`,
  };

  const hourHandStyle = {
    transform: `rotate(${getHandRotation('Hours', 12)}deg)`,
  };

  return (
    <div className=" h-screen w-screen flex flex-col items-center justify-center">
    <div className="input-container">
        <label htmlFor="userTime">Enter Time:</label>
        <input
          type="text"
          id="userTime"
          value={userTime}
          onChange={(e) => setUserTime(e.target.value)}
          placeholder="HH:mm:ss"
        />
        <button onClick={updateStopwatch}>Set Time</button>
      </div>
    <div className="clock_face h-[300px] w-[300px] border-2 border-black rounded-full flex justify-center m-2">
      <div className="h-[300px] w-[10px] flex flex-col justify-between digits m-0 p-0 absolute">
        <div className="di">12</div>
        <div className="di">6</div>
      </div>
      <div className="h-[300px] w-[10px] flex rotate-90 flex-col justify-between digits m-0 p-0 absolute">
        <div className="-rotate-90">3</div>
        <div className="-rotate-90">9</div>
      </div>
      
      <div className="hour_hand"
       style={hourHandStyle} >
        <div className="h-[150px] "></div>  
        <div className="h-[80px] border-2 border-black"></div>
       </div>
       <div className="minute_hand"
       style={minuteHandStyle} >
        <div className="h-[150px]"></div>
        <div className="h-[120px] border-2 border-black"></div>
       </div>
       <div className="second_hand"
       style={secondHandStyle} >
        <div className="h-[150px]"></div>
        <div className="h-[140px] border-2 border-red-700"></div>
       </div>
    </div>
    
    </div>
  );
}

export default AnalogStopWatch;
