import { TimeEntry } from "../App";

function Total(props: {
    entries: TimeEntry[];

}) {
    // const duration
    const totalDuration = props.entries.reduce((accumulator, currentValue) => (
        accumulator + (currentValue.stop - currentValue.start)
    ), 0)



    const totalDurationHours = (Math.round((totalDuration / 3600000) % 60)).toString();
    const totalDurationMinutes = (Math.round((totalDuration / 60000) % 60)).toString().padStart(2, '0');

    // const array1 = [1, 2, 3, 4];
    // // 0 + 1 + 2 + 3 + 4
    // const initialValue = 0;
    //
    // const sumWithInitial = array1.reduce(
    //   (accumulator, currentValue) => accumulator + currentValue,
    //   initialValue
    // );

    // 0
    // (0, 1) => 0 + 1 = 1
    // (1, 2) => 1 + 2 = 3
    // (3, )

    // console.log(sumWithInitial);
    // // Expected output: 10


    return (
        <div>
            <p>total driving time</p>
            <p>{totalDurationHours}:{totalDurationMinutes}</p>
        </div>

    )
}

export { Total }