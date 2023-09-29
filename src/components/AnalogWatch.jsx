import React, { useState, useEffect } from 'react';
import './AnalogWatch.css'
function AnalogWatch() {

  const move=(taime)=>{
  return (taime % 60) * (360 / 60);
  }
  
  const [time, setTime] = useState();
  const taime=0
  function settingTime(t){
    setTime(t)
    taime= t;
  };

  useEffect(() => {
    const bul= true;
    if(!bul)
    return;
    const interval = setInterval(() => {
        setTime(taime-1000);
      }, 1000);
    setTimeout(() => {
      bul=false;
    },time);
    return () => clearInterval(interval);
  }, []);

  const secondHandStyle = {
    transform: `rotate(${180+move(taime)}deg)`,
  };

  const minuteHandStyle = {
    transform: `rotate(${180}deg)`,
  };
 
  const hourHandStyle = {
    transform: `rotate(${180}deg)`,
  };

  return (
    
    <div className=" h-screen w-screen flex flex-col items-center justify-center">
      <form className=''>
      <input type='number' className='p-2 m-2 border-2 border-black shadow-lg rounded-sm'></input>
      <button onClick={()=>settingTime(e.target.value)} className='p-2 m-2 border-2 border-black shadow-lg rounded-sm'>submit</button>
      </form>

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

export default AnalogWatch;
