import { useState } from "react";

export function TextComponent() {
    // Stato che contiene il valore inputato dell'utente
    const [text, setText] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return <>
        <div>TextComponent</div>
        { /*                                                                 passargli un value indica
                                                                             che questo input è controllato 
                                                                             da voi!
                                                                             |
                                                                             v
         */}
        <div> Username: <input type="text" placeholder="Inserisci il nome" value={text} onChange={(ev) => {
            console.log(ev.target.value);
            setText(ev.target.value);
        }} /><button onClick={() => {
            setText("");
        }}>Pulisci</button></div>

        <div> Password: <input type="text" onChange={(ev) => {
            setPassword(ev.target.value);
        }} /></div>

        <div>Username: {text}</div>
        <div>Password: {password}</div>
    </>
}