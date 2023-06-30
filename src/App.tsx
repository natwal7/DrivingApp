
import { useState } from 'react';
import './App.css';
import { MultiSelectButtons } from './components/MultiSelectButtons';
import { Timer } from './sections/Timer';
import useLocalStorageState from 'use-local-storage-state';
import { History } from './sections/History';
import { Total } from './sections/Total';

type TimeEntry = { start: number, stop: number };

// let a: TimeEntry = {start: 5, stop: 4};

function App() {
  const [selectedButtonOne, setSelectedButtonOne] = useState<number>();
  const [selectedButtonTwo, setSelectedButtonTwo] = useState<number>();
  const [startTime, setStartTime] = useLocalStorageState<number | undefined>('startTime', { defaultValue: undefined });
  const [history, setHistory] = useLocalStorageState<TimeEntry[]>('history', { defaultValue: [] });
  //   const [history, setHistory] = useLocalStorageState<{start: number, stop: number}[]>('history', {});
  // One entry

  // {start: 3252358370, stop: 30598235320}
  // entry.start, entry.stop

  // [3252358370, 30598235320]
  // entry[0] entry[1]

  // 254 : number
  // 'safk sjd' : string
  // {start: 235, stop: 23840} : {start: number, stop: number}

  // 
  // [string, number, string]
  // string[]

  function handleStart() {
    setStartTime(Date.now());
    console.log(startTime);
  }

  function handleStop() {
    if (startTime === undefined) {
      return;
    }
    console.log(Date.now() - startTime);
    setStartTime(undefined);

    setHistory([...history, { start: startTime, stop: Date.now() }]);

    // let a = [1, 2, 3];
    // ...a   => 1, 2, 3
    // f(...a) => f(1,2,3)
    // [...a] => [1,2,3]
    // [...a, 5] => [1,2,3,5]

    //adds to the history
  }

  console.log(history);


  return (
    <div className="App">
      <header className="App-header">
        <p>Learning to Drive</p>
      </header>

      <div className='ControlBar'>
        <p className="DashButton">Dashboard</p>
        <p className="HoursButton">Hours Log</p>
      </div>
      <MultiSelectButtons value={selectedButtonTwo} onChange={setSelectedButtonTwo} className={'yellow'} options={['one', 'two', 'three']} />

      <div className='Timer'>
        <Timer onStart={handleStart} onStop={handleStop} startTime={startTime} />
      </div>
      
      <History setEntries={setHistory} entries={history} />
      <Total entries={history} />

    </div>
  );
}

export default App;
export { type TimeEntry };