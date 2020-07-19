import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import OnboardView from "../components/OnboardView";
import BadoopButton from '../components/BadoopButton'; 
import DistressNotifModal from "../components/DistressNotifModal";

const WelcomeScreen = (props) => {
  const welcomeHero = require('../assets/welcome_hero.png'); 
  const [ modalVisible, setModalVisibility ] = useState(false); 

  return (
    <OnboardView>
      <Image source={welcomeHero} style={styles.welcome_hero}/>
      <View>
        <Text style={styles.title_text}>Badoop</Text>
        <Text style={styles.subtitle_text}>Your protector on guard. {'\n'}Ready in a heartbeat.</Text>
      </View>
      <View style={styles.badoop_button_view}>
        <BadoopButton button_style={'white'} on_press={() => setModalVisibility(true)} title_text={"Get Started"}/>
      </View>
      <DistressNotifModal modal_visible={modalVisible} dismiss_modal={() => setModalVisibility(false)} />
    </OnboardView>
  );
};

const styles = StyleSheet.create({
  welcome_hero: {
    flex: 1, 
    width: '90%', 
    height: '90%', 
    resizeMode: 'contain', 
    marginTop: '30%' 
  }, 
  title_text: {
    fontSize: 36, 
    color: '#ffffff', 
    textAlign: 'center', 
    fontFamily: 'OpenSans_400Regular'
  }, 
  subtitle_text: {
    fontSize: 18,
    color: '#ffffff', 
    textAlign: 'center', 
    fontFamily: 'OpenSans_300Light'
  }, 
  badoop_button_view: {
    flexDirection: 'row', 
    marginVertical: 48
  }
})

export default WelcomeScreen;
