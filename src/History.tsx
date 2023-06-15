import { TimeEntry } from "./App";

function History(props: {
    
    entries: TimeEntry[];
}) {


    return (
        <div>
            {props.entries.map((entry, i) => {

                const startDate: Date = new Date(entry.start);  

                const startMonth = startDate.getMonth()+1;
                const startDay = startDate.getDate();
                
                const duration = entry.stop - entry.start;

                const durationHours = (Math.round((duration/3600000)%60)).toString();
                const durationMinutes = (Math.round((duration/60000)%60)).toString().padStart(2, '0');

                return (
                    <div
                        key={i}
                        className="entry"
                    >{startMonth}/{startDay} | {durationHours}:{durationMinutes}</div>
                )
            })}
        </div>
    );

}

export {History};

// curly braces need a return, but parenthesis doesn't


// Equivalent
// () => 5
// () => (5)
// () => {return 5;}

// () => {
//     let a = 21;
//      return a;
// }