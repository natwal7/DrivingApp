// Takes in props (value, etc.)
// need to make: value variable, SetValue function, className, options
// when clicked, changes value (onChange)
// button w/value of "on" is displayed
// note: using props, with the variable and function declared wherever it's used, so that the value changes here can affect things outside of it

import { ReactNode } from "react";

function MultiSelectButtons(props:{
    value:number | undefined;
    onChange:(value:number)=>void;
    className?: string;
    options: ReactNode[];
}) {
    //   props.value
    
    // () => 

    return(
        <div>
            {props.options.map((option, i) => (
                <button
                    key={i}
                    className={`${props.className ?? ''} ${props.value === i ? 'on' : ''}`} // ?? operator means if the term is null/undefined, set it to first
                    onClick={() => props.onChange(i)}
                >{option}</button>
            ))}
        </div>
    )

        // condition ? value if true : value if false
}

// const [page, setPage] = useState(0);
// <MultiSelectBUttons value={page} onChange={setPage} />

export {MultiSelectButtons};