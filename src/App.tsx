
import { useState } from 'react';
import './App.css';
import { MultiSelectButtons } from './components/MultiSelectButtons';
import { Timer } from './Timer';
import useLocalStorageState from 'use-local-storage-state';

function App() {
  const [selectedButtonOne, setSelectedButtonOne] = useState<number>();
  const [selectedButtonTwo, setSelectedButtonTwo] = useState<number>();
  const [startTime, setStartTime] = useLocalStorageState<number | undefined>('startTime', {defaultValue:undefined});

  function handleStart(){
    setStartTime(Date.now());
    console.log(startTime);
  }

  function handleStop(){
    if (startTime === undefined){
      return;
    }
    console.log(Date.now() - startTime);
    setStartTime(undefined);
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <p>Learning to Drive</p>   
      </header>

      <div className='ControlBar'>
        <div className="DashButton">
          <p>Dashboard Button here</p>
        </div>
        <div className="HoursButton">
          <p>Hours Log Button here</p>
        </div>
      </div>

      <div className='Timer'>
        <div className="StartButton">
          <button>start</button>
        </div>
        <div className="StopButton">
          <button>stop</button>
        </div>
        <div className="RunningTime">
          <p>Running Time here</p>
        </div>
        <Timer onStart={handleStart} onStop={handleStop} startTime={startTime} />
        <MultiSelectButtons value={selectedButtonOne} onChange={setSelectedButtonOne}  options={['one', 'three', 'two', 'ten', 'seven', 'apple']}/>
        <MultiSelectButtons value={selectedButtonTwo} onChange={setSelectedButtonTwo} className={'yellow'} options={['zero', 'two', 'one', 'nine', 'eight', 'pepper']}/>
      </div>

    </div>
  );
}

export default App;
