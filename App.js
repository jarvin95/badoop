import { StatusBar } from "expo-status-bar";
import React, { useState } from "react"; 
import {
  StyleSheet,
  Text, 
  View
} from "react-native"; 
import WelcomeScreen from "./screens/WelcomeScreen";
import MainScreen from './screens/MainScreen'; 
import { useFonts, 
  OpenSans_300Light, 
  OpenSans_400Regular, 
  OpenSans_600SemiBold
} from '@expo-google-fonts/open-sans'; 

export default function App() {
  // const [enteredGoal, setEnteredGoal] = useState("");
  // const [courseGoals, setCourseGoals] = useState([]);
  // const goalInputHandler = (inputText) => {
  //   setEnteredGoal(inputText);
  // };
  // const addHandler = () => {
  //   setCourseGoals((currentGoals) => [
  //     ...currentGoals,
  //     { key: Math.random().toString(), value: enteredGoal },
  //   ]);
  // };
  let [ fontsLoaded ] = useFonts({
    OpenSans_300Light, 
    OpenSans_400Regular, 
    OpenSans_600SemiBold
  }); 
  
  if (!fontsLoaded) {
    return <View><Text>Fonts cannot load</Text></View>
  }

  return (
    // <WelcomeScreen/>
    <MainScreen/>
  ); 
}

const styles = StyleSheet.create({
  screen: {
    height: '100%'
  }
});
