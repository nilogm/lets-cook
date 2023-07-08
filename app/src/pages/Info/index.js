import { View, Text, Pressable, FlatList } from "react-native";
import styles from "./style";

export default function Info({ summary }: { summary: string }) {
    var info = []
    const renderSummary = () => {

        var firstSplit = summary.split("<a")[0]
        var lastDot = -1
        var lastlastDot = -1
        var lastlastlastDot = -1
        for (i = 0; i < firstSplit.length; i++) {
            if (firstSplit[i] == ".") {
                lastlastlastDot = lastlastDot
                lastlastDot = lastDot
                lastDot = i
            }
        }
        summary = firstSplit.substring(0, lastlastlastDot + 1)
        console.log(summary)

        var focus = false

        var splitted = summary.split("<b>")
        for (i = 0; i < splitted.length; i++) {
            var splitted2 = splitted[i].split("</b>")
            for (j = 0; j < splitted2.length; j++) {

                info.push(focus ? <Text style={{ fontWeight: 'bold', color: "#B6B681" }}>{splitted2[j]}</Text> : <Text>{splitted2[j]}</Text>)
                focus = !focus
            }
        }
    }

    renderSummary()

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>{info}</Text>
        </View>
    );

}
