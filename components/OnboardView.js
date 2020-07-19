import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; 

const OnboardView = (props) => {
  return (
    <LinearGradient style={props.style ? props.style : styles.master_view} colors={['#ffbb75', '#ff5e81']}>
      {props.children}
    </LinearGradient>
  );
};

export default OnboardView;

const styles = StyleSheet.create({
  master_view: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})