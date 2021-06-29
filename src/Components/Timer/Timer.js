import React from "react";
import { useTimer } from 'react-timer-hook';


function tenSecCount() {
        
    const time = new Date();
    time.setSeconds(time.getSeconds() + 10); // 10 seconds timer
    return (
      <div>
        <MyTimer expiryTimestamp={time} />
      </div>
    );
  
}


function myTimer({ expiryTimestamp }) {
    const {
      seconds,
      start,
      pause,
      resume,
      restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    

    render() 
        return(
            <div>
                <div style={{fontSize: '100px'}}>
                <span>{seconds}</span>
                </div>

            </div>
        )
    
}

export default myTimer;
export default tenSecCount;