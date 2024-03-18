import { useState } from "react";
import styles from "./ListItemAdder.module.scss";
import { UserOutlined } from "@ant-design/icons"
import { Button, Input } from "antd";

export function ListItemAdder(props: {
    readonly onSave: (text: string) => void;
}) {
    const { onSave } = props;
    const [text, setText] = useState("");

    return <div className={styles.listItemAdder}>

        <Input size="large" allowClear value={text} placeholder="large size" prefix={<UserOutlined />} onChange={ev => setText(ev.target.value)} />
        <Button type="primary" onClick={() => {
            onSave(text);
            setText("");
        }}>Aggiungi</Button>
    </div>
}