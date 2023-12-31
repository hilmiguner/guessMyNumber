// REACT NATIVE CORES - BEGIN
import { Image, View, StyleSheet, Text, useWindowDimensions, ScrollView } from "react-native";
// REACT NATIVE CORES - END

// CUSTOM CONSTANTS - BEGIN
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
// CUSTOM CONSTANTS - END

// CUSTOM CONSTANTS - BEGIN
import Colors from "../constants/colors";
// CUSTOM CONSTANTS - END

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    const { width, height } = useWindowDimensions();

    let imageSize = 300;
    if(width < 380) imageSize = 150;
    if(height < 500) imageSize = 80;

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    };

    return(
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>GAME OVER!</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image style={styles.image} source={require("../assets/images/success.png")}/>
                </View>
                <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text>.</Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </ScrollView>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: "hidden",
        margin: 36,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    summaryText: {
        fontFamily: "OpenSans-Regular",
        fontSize: 24,
        textAlign: "center",
        marginBottom: 24,
    },
    highlightText: {
        fontFamily: "OpenSans-Bold",
        color: Colors.primary500,
    },
});