import { View } from "react-native"
import styles from "./style"

export function Line({ width = "80%", height = 1 }) {
    return (<View style={[styles.line, { width: width, height: height }]} />)
}