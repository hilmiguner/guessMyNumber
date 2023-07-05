// REACT NATIVE CORES - BEGIN
import { useState } from "react";
import { TextInput, Alert, View, StyleSheet } from "react-native";
// REACT NATIVE CORES - END

// CUSTOM CONSTANTS - BEGIN
import Colors from "../constants/colors";
// CUSTOM CONSTANTS - END

// CUSTOM COMPONENT IMPORTS - BEGIN
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
// CUSTOM COMPONENT IMPORTS - END

function StartGameScreen({ onConfirmNumber }) {
    const [enteredNumber, setEnteredNumber] = useState("");

    function onNumberChangeHandler(currentNumber) {setEnteredNumber(currentNumber)}

    function resetNumberHandler() {setEnteredNumber("")}

    function confirmNumberHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                "Invalid input!", 
                "Input has to be a number between 1 and 99.", 
                [{ text: "Okay", style: "destructive", onPress: resetNumberHandler }]
            );
        }
        else {
            onConfirmNumber(chosenNumber);
        }
    }

    return(
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <View style={styles.numberInputContainer}>
                <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad"
                onChangeText={onNumberChangeHandler}
                value={enteredNumber}
                />   
                </View>
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <PrimaryButton onPress={resetNumberHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton onPress={confirmNumberHandler}>Confirm</PrimaryButton>
                    </View> 
                </View>
            </Card>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: "center",
    },
    inputContainer: {
        alignItems: "center",
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 8,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.5,
    },
    numberInputContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    numberInput: {
        height: 55,
        fontSize: 32,
        fontWeight: "bold",
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        width: 50,
        textAlign: "center",
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    button: {
        marginVertical: 10,
        marginHorizontal: 10,
        flex: 1
    },
});