import { useState } from "react";
import styles from "./ListItemAdder.module.scss";

export function ListItemAdder(props: {
    readonly onSave: (text: string) => void;
}) {
    const { onSave } = props;
    const [text, setText] = useState("");

    return <div className={styles.listItemAdder}>
        <input type="text" value={text} onChange={ev => setText(ev.target.value)} />
        <button onClick={() => {
            onSave(text);
            setText("");
        }} >Aggiungi</button>
    </div>
}