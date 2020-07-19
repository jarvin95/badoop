import React from "react";
import { StyleSheet, Button } from "react-native";

const OnboardProgressButton = (props) => {
    return (
        <Button title={props.title} style={styles.progress_button}/>
    ); 
}

const styles = StyleSheet.create({
    progress_button: {
        borderRadius: 8, 
        color: 'white', 
        fontWeight: 'bold', 
        backgroundColor: '#EB9890', 
        borderWidth: 1
    }
})

export default OnboardProgressButton; 