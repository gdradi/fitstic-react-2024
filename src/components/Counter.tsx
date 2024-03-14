import { useEffect, useState } from "react";
import Display from "./Display";

export default function Counter(props: {
    readonly initialValue?: number;
}) {
    const { initialValue = 0 } = props;
    // Definizione di uno stato, di tipo number, 
    // inizializzato a 0
    const [contatore, setContatore] = useState(initialValue);
    console.log("Counter()", contatore);

    /** come si legge in italiano?
     * 
     * "
     * quando almeno una delle variabili elencate nella lista di dipendenze
     * cambia, allora viene invocato l'effetto
     * "
     * 
     * con:
     *      lista delle dipendenze -> array (secondo argomento)
     *      effetto -> funzione (primo argomento)
     */
    useEffect(() => {
        console.log("useEffect in azione!", initialValue);
        setContatore(initialValue);
        return () => {
            console.log("return dello useEffect", initialValue);
        };
    }, [initialValue]);

    return <>
        <Display n={contatore} color="blue" />
        <button onClick={() => {
            setContatore(contatore + 1);
            console.log("click!, contatore:", contatore);
        }}>premi</button>
        {contatore > 5 && <div>attenzione! maggiore di 5</div>}
    </>
}