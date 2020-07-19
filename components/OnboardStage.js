import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { OnboardProgressButton } from './OnboardProgressButton'; 

const OnboardStage = (props) => {
  let button = null; 
  if (props.button.show) {
    button = <OnboardProgressButton onClick={props.button.handler}>{props.button.title}</OnboardProgressButton>
  }

  return (
    <View style={styles.wrapper_view}>
      <View style={styles.main_view}>
        <Text style={styles.title_text}>{props.title}</Text>
        {/* {props.body} */}
      </View>
      <OnboardProgressButton title={props.button.title}/>
    </View>
  );
};

const styles = StyleSheet.create({
  main_view: {
    borderRadius: 32,
  },
  wrapper_view: {
    width: '80%', 
    height: '60%'
  }, 
  title_text: {
    fontSize: 10
  }
});

export default OnboardStage;