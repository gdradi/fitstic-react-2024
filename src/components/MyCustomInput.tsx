import { useState } from "react";



export function MyCustomInput(props: {
    readonly label: string;
    readonly required: boolean
}) {
    const { required, label } = props;
    const [text, setText] = useState<string>("");
    return <>
        <div>
            <div>
                <label>{label} {required === true && <span>*</span>}</label>
                <input type="text" value={text} onChange={ev => setText(ev.target.value)} />
            </div>
            {text.length === 0 && required === true && <div>Campo obbligatorio</div>}
        </div>
    </>
}