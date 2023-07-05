// REACT NATIVE CORES - BEGIN
import React, { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView, StatusBar } from "react-native";
// REACT NATIVE CORES - END

// CUSTOM CONSTANTS - BEGIN
import Colors from "./constants/colors";
// CUSTOM CONSTANTS - END

// CUSTOM SCREEN IMPORTS - BEGIN
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
// CUSTOM SCREEN IMPORTS - END

// THIRD PARTY PACKAGE IMPORTS - BEGIN
import LinearGradient from "react-native-linear-gradient";
// THIRD PARTY PACKAGE IMPORTS - END

function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);

  function pickedNumberHandler(pickedNumber) {setUserNumber(pickedNumber)}

  let currentScreen = <StartGameScreen onConfirmNumber={pickedNumberHandler}/>;
  if(userNumber) currentScreen = <GameScreen userNumber={userNumber} onGameOver={() => setGameIsOver(true)}/>;
  if(gameIsOver) currentScreen = <GameOverScreen />;

  return(
    <>
      <StatusBar barStyle="light-content"/>
      <LinearGradient style={styles.rootScreen} colors={[Colors.primary700, Colors.accent500]}>
        <ImageBackground 
        source={require("./assets/images/background.png")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{currentScreen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});