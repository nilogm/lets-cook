import { View } from "react-native"
import styles from "./style"

/**
 * Returns a line of set width and height.
 * @param {string | int} width 
 * @param {string | int} height 
 * @returns 
 */
export function Line({width = "80%", height = 1} : {width: string | int, height: string | int}) {
    return (<View style={[styles.line, { width: width, height: height }]} />)
}

/**
 * Transparent spacing for lists.
 * @param {boolean} vertical 
 * @param {int} spacing 
 * @returns 
 */
export function Spacing({ vertical = true, spacing = 5 }: { vertical: boolean, spacing: int }) {
    return (<View style={{ height: vertical ? spacing : "100%", width: vertical ? "100%" : spacing }} />)
}