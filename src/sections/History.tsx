import { useState } from "react";
import { setEmitFlags } from "typescript";
import { TimeEntry } from "../App";

function History(props: {
    entries: TimeEntry[];
    setEntries: (entries: TimeEntry[]) => void;
}) 
{
    const [ifAddRow, setIfAddRow] = useState(false);
    const [manualDate, setManualDate] = useState<string>();
    const [manualStart, setManualStart] = useState<string>();
    const [manualEnd, setManualEnd] = useState<string>();
    
    const addManualEntry = () => {

        

        
        const startDate = Date.parse(manualDate+'T'+manualStart);
        const endDate = Date.parse(manualDate+'T'+manualEnd);
        // const manualDuration = endDate - startDate;
        
        props.setEntries([...props.entries, { start: startDate, stop: endDate }]);
        
        setIfAddRow(false);
        setManualDate(undefined);
        setManualStart(undefined);
        setManualEnd(undefined);

       
        // manualDate == '2023-06-12'
        // manualStart == '13:42'
        // Date.parse(newManualDate) == 327525719;
    }

    return (
        <div className="historyBox">
            <table>
                <thead>
                    <tr>
                        <th>date</th>
                        <th>time</th>
                    </tr>

                </thead>
                <tbody>

                    {props.entries.map((entry, i) => {

                        const startDate: Date = new Date(entry.start);
                        const startMonth = startDate.getMonth() + 1;
                        const startDay = startDate.getDate();
                        const duration = entry.stop - entry.start;
                        const durationHours = (Math.round((duration / 3600000) % 60)).toString();
                        const durationMinutes = (Math.round((duration / 60000) % 60)).toString().padStart(2, '0');
                        const deleteEntry = () => {
                            if (!window.confirm('Are you sure you want to delete this entry?')) return;
                            props.setEntries(props.entries.filter((filteredEntry, filteredi) => filteredi !== i)); // if filteredi comes back false, then deelte filteredEntry
                        }

                        //

                        return (
                            
                            <tr
                                key={i}
                                className="entry"
                            >
                                <td>{startMonth}/{startDay}</td>
                                <td>{durationHours}:{durationMinutes}</td>
                                <td><button onClick={deleteEntry}>X</button></td>
                                
                            </tr>
                            
                        )
                        
                    })}
                    {/* <tr><td colSpan={3}><button onClick={() => setIfAddRow(true)}>+</button></td></tr> */}

                    {/* onChange={event => fn(event.target.value)*/}
                    {ifAddRow ? (
                        <tr>
                            <td><input type="date" onChange={event => setManualDate(event.target.value)} value={manualDate}/></td>
                            <td><input type="time" onChange={event => setManualStart(event.target.value)} value={manualStart}/><input type="time" onChange={event => setManualEnd(event.target.value)} value={manualEnd}/></td>
                            <td><button onClick={addManualEntry}>check</button></td>
                            
                        </tr>
                    ): <tr><td colSpan={3}><button onClick={() => setIfAddRow(true)}>+</button></td></tr>
                    }
                            

                </tbody>

            </table>

        </div>
    );

}

export { History };

// curly braces need a return, but parenthesis doesn't


// Equivalent
// () => 5
// () => (5)
// () => {return 5;}

// () => {
//     let a = 21;
//      return a;
// }

// if (confirm('Are you sure you want to delete this entry?')) {
                            //     props.setEntries(props.entries.filter())
                            // }

// const a = [1,2,3];
// a.filter((e) => e > 1) == [2,3]
// 1 > 1 == false, not included
// 2 > 1 == true, included
// 3 > 1 == true, included