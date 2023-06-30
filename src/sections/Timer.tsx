// start when Start
// stop when Stop
// take time differential

import { useEffect, useState } from "react";

function Timer(props:{
    onStart: () => void;
    onStop: () => void;
    startTime?: number;
}) {

    const [runningTime, setRunningTime] = useState<number>();

    useEffect(() => {

        if (props.startTime !== undefined) {
            const interval = setInterval(() => {
                setRunningTime(props.startTime ? Date.now() - props.startTime : undefined);
                
            }, 1000);
    
            return () => clearInterval(interval);
        }

    }, [props.startTime]);
    
    const seconds = runningTime ? (Math.floor((runningTime/1000)%60)).toString().padStart(2, '0') : undefined;
    const minutes = runningTime ? (Math.floor((runningTime/60000)%60)).toString().padStart(2, '0') : undefined;
    const hours = runningTime ? (Math.floor((runningTime/3600000)%60)).toString().padStart(2, '0') : undefined;


    return (
        <div>
            <button onClick={props.onStart}>Start</button>
            <button onClick={props.onStop}>Stop</button>
            <div>{hours}:{minutes}:{seconds}</div>
            <input type="checkbox" checked={props.startTime !== undefined}></input>
        </div>
    )
}

export {Timer}