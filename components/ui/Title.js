// REACT NATIVE CORES - BEGIN
import { Text, StyleSheet, Platform } from "react-native";
// REACT NATIVE CORES - END

// CUSTOM CONSTANTS - BEGIN
import Colors from "../../constants/colors";
// CUSTOM CONSTANTS - END

function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    );
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: "OpenSans-Bold",
        fontSize: 24,
        color: "white",
        textAlign: "center",
        borderWidth: Platform.OS === "android" ? 2 : null,
        borderColor: "white",
        padding: 12,
        maxWidth: "80%",
        width: 300,
    },
});