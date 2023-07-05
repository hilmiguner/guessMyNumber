// REACT NATIVE CORES - BEGIN
import { StyleSheet, Text } from "react-native";
// REACT NATIVE CORES - END

// CUSTOM CONSTANTS - BEGIN
import Colors from "../../constants/colors";
// CUSTOM CONSTANTS - END

function InstructionText({ children, style }) {
    return(
        <Text style={[styles.instructionText, style]}>
            {children}
        </Text>
    );
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
    },
});