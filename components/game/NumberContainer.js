// REACT NATIVE CORES - BEGIN
import { View, Text, StyleSheet } from "react-native";
// REACT NATIVE CORES - END

// CUSTOM CONSTANTS - BEGIN
import Colors from "../../constants/colors";
// CUSTOM CONSTANTS - END

function NumberContainer({ children }) {
    return(
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    numberText: {
        color: Colors.accent500,
        fontSize: 36,
        fontWeight: "bold",
    },
});