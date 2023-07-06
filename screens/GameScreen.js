// REACT NATIVE CORES - BEGIN
import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, FlatList } from "react-native";
// REACT NATIVE CORES - END

// CUSTOM COMPONENT IMPORTS - BEGIN
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";
// CUSTOM COMPONENT IMPORTS - END

// THIRD PARTY PACKAGE IMPORTS - BEGIN
import Ionicons from "react-native-vector-icons/Ionicons";
// THIRD PARTY PACKAGE IMPORTS - END

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    return rndNum;
}

let minBoundary = 1; let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(0, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if(currentGuess == userNumber) onGameOver(guessRounds.length);
    }, [currentGuess, userNumber, onGameOver]);

    // When dependency list is empty, function in effect function will run just once when jsx component initialized.
    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

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

        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, userNumber);
        setCurrentGuess(newRndNumber);
        setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds])
    }
    return(
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={{marginBottom: 12}}>Lower or Higher</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                            <Ionicons name="md-remove" size={24} color="white"/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
                            <Ionicons name="md-add" size={24} color="white"/>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.logContainer}>
                <FlatList 
                data={guessRounds} 
                renderItem={(itemData) => <GuessLogItem guess={itemData.item} roundNumber={guessRounds.length - itemData.index}/>}
                keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
        alignItems: "center",
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    button: {
        flex: 1,
    },
    logContainer: {
        flex: 1,
        padding: 16,
    },
});