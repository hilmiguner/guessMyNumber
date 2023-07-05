// REACT NATIVE CORES - BEGIN
import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
// REACT NATIVE CORES - END

// CUSTOM CONSTANTS - BEGIN
import Colors from "../../constants/colors";
// CUSTOM CONSTANTS - END

function PrimaryButton({ children, onPress }) {
    return(
        <View style={styles.buttonOuterContainer}>
            <Pressable 
            onPress={onPress} 
            android_ripple={{color: Colors.primary600}}
            style={(pressEvent) => 
                pressEvent.pressed 
                    ? (Platform.OS == "ios" ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer )
                    : styles.buttonInnerContainer}
            >   
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>         
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
    pressed: {
        opacity: 0.75,
    },
});