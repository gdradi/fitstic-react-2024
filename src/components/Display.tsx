import styles from "./Display.module.scss";


export default function Display(props: {
    n: number,
    color?: string
}) {
    const { n, color = "red" } = props;
    return <div className={styles.display} style={{ color: color }}>{n}</div>
}