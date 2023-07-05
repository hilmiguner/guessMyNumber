// REACT NATIVE CORES - BEGIN
import { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
// REACT NATIVE CORES - END

// CUSTOM COMPONENT IMPORTS - BEGIN
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
// CUSTOM COMPONENT IMPORTS - END

// THIRD PARTY PACKAGE IMPORTS - BEGIN
//import Ionicons from "react-native-vector-icons/Ionicons";
// THIRD PARTY PACKAGE IMPORTS - END

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum == exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return rndNum;
    }
}

let minBoundary = 1; let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(0, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if(currentGuess == userNumber) onGameOver();
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) {
        if((direction == "lower" && currentGuess < userNumber) || (direction == "higher" && currentGuess > userNumber)) {
            Alert.alert("Don't lie!", "You know that this is wrong!", [{ text: "Sorry!", style: "cancel" }]);
            return;
        }

        if(direction == "lower") {
            maxBoundary = currentGuess;
        }
        else if(direction == "higher") {
            minBoundary = currentGuess + 1;
        }

        if((maxBoundary - minBoundary) == 1) {
            setCurrentGuess(userNumber);
            return;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, userNumber);
        setCurrentGuess(newRndNumber);
    }
    return(
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={{marginBottom: 12}}>Lower or Higher</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>-</PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>+</PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>
                {/* GUESS LOG */}
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    button: {
        flex: 1,
    },
});