import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native"; 

const getButtonStyle = (button_style) => {
  if (button_style === "white") {
    return styles.button_white;
  } else if (button_style === "peach") {
    return styles.button_peach;
  } else if (button_style === "red") {
    return styles.button_red;
  } else if (button_style === "orange") {
    return styles.button_orange; 
  }
};

const getTextStyle = (button_style) => {
  if (button_style === "white") {
    return styles.text_black;
  } else if (button_style === "peach" || button_style === "pink" || button_style === "orange") {
    return styles.text_white;
  }
};

const OnboardProgressButton = (props) => {
  return (
    <TouchableOpacity onPress={props.on_press} style={typeof(props.button_style) === 'string' ? getButtonStyle(props.button_style) : props.button_style} activeOpacity={0.3}>
      <Text style={typeof(props.button_style) === 'string' ? getTextStyle(props.button_style) : props.text_style}>{props.title_text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button_white: {
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    width: '75%', 
  }, 
  button_peach: {
    borderRadius: 12,
    backgroundColor: "#FF8A7F",
    paddingVertical: 12,
    width: '75%', 
  }, 
  button_pink: {
    borderRadius: 12,
    backgroundColor: "#FF008F",
    paddingVertical: 12,
    width: '75%', 
  }, 
  button_orange: {
    borderRadius: 12,
    backgroundColor: "#FF8100",
    paddingVertical: 12,
    width: '75%', 
  }, 
  text_black: {
    fontFamily: 'OpenSans_400Regular', 
    fontSize: 18, 
    textAlign: 'center', 
    color: '#000000'
  }, 
  text_white: {
    fontFamily: 'OpenSans_400Regular', 
    fontSize: 18, 
    textAlign: 'center', 
    color: '#ffffff'
  }
});

export default OnboardProgressButton;
