import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import Modal from "react-native-modal";
import BadoopButton from "./BadoopButton";

const DistressNotifModal = (props) => {
  const distressNotifHero = require("../assets/distress_notif_hero.png");
  const closeNotifIcon = require("../assets/close_notif_icon.png");
  const help = () => {
    helpRequest();
    // helpAlert(true);
    props.dismiss_modal();
  };
  const helpAlert = (isResponseSuccessful) => {
    if (isResponseSuccessful) {
      Alert.alert(
        "Help requested!",
        "Your loved ones have been notified. Help is on the way. Hang in there!",
        [
          {
            text: "Got it",
            onPress: () =>
              console.log("Help success notification acknowledged"),
          },
        ]
      );
    } else {
      Alert.alert(
        "Server busy",
        "We are extremely sorry. Our servers are busy. Please call the emergency hotlines. \n\nPolice: 999\nFire & Ambulance: 995)",
        [
          {
            text: "Got it",
            onPress: () =>
              console.log("Help failure notification acknowledged"),
          },
        ]
      );
    }
  };

  const helpRequest = () => {
    return fetch("https://38svtl88g7.execute-api.us-east-2.amazonaws.com/beta", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        operation: "create",
        payload: {
          user: "Kristen",
          assigner: "+6592212557",
          location: "https://www.google.com.sg/maps/@1.3668477,103.8692507,21z",
        },
      }),
    }).then((response) => {
      console.log("Call for help!"); 
      // helpAlert(response.json());
    })
    .catch(error => {
      console.log(error); 
    });
  };

  const generateGmapLink = () => {
    return "https://www.google.com.sg/maps/@1.388277,103.8701623,17z";
  };

  return (
    <Modal
      isVisible={props.modal_visible}
      style={styles.modal}
      backdropOpacity={0.3}
      backdropColor={"#ffffff"}
      onBackButtonPress={props.dismiss_modal}
    >
      <TouchableOpacity onPress={props.dismiss_modal} activeOpacity={0.3}>
        <Image source={closeNotifIcon} style={styles.close_notif_icon} />
      </TouchableOpacity>
      <View style={styles.modal_view}>
        <Image source={distressNotifHero} style={styles.distress_notif_hero} />
        <Text style={styles.text}>
          You seem distressed. {"\n"}
          Are you alright?
        </Text>
        <BadoopButton
          title_text={"Help!"}
          button_style={"peach"}
          on_press={help}
        />
        <BadoopButton
          title_text={"I'm doing good"}
          button_style={"white"}
          on_press={props.dismiss_modal}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    marginTop: "50%",
    borderTopStartRadius: 64,
    borderTopEndRadius: 64,
    backgroundColor: "#ffffff",
  },
  close_notif_icon: {
    width: 20,
    height: 20,
    alignSelf: "center",
    marginTop: 8,
    resizeMode: "contain",
  },
  modal_view: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 48,
  },
  text: {
    fontSize: 20,
    color: "#FF8A7F",
    fontFamily: "OpenSans_600SemiBold",
    textAlign: "center",
    marginVertical: 16,
  },
  distress_notif_hero: {
    width: "80%",
    maxHeight: 300,
    alignSelf: "center",
    resizeMode: "contain",
  },
});

export default DistressNotifModal;
