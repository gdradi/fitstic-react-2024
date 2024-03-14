import { useEffect, useState } from "react";

export function Interval() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
            console.log("interval!", value);
            setValue(n => n + 1);
        }, 1000);
        return () => {
            clearInterval(intervalRef);
        }
    }, [])

    return <div>Interval value: {value}</div>
}