import React, { useState } from 'react'; 
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";
import BadoopButton from '../components/BadoopButton'; 
import { LinearGradient } from "expo-linear-gradient"; 
import { LineChart } from 'react-native-chart-kit'; 
import DistressNotifModal from "../components/DistressNotifModal";

const MainScreen = (props) => {
  const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]; 
  const chillaxHero = require('../assets/chillax_hero.png'); 
  const pastEvent = require('../assets/past_event_icon.png'); 
  const articles = require('../assets/articles_icon.png'); 
  const menu = require('../assets/menu_icon.png'); 
  const [ modalVisible, setModalVisibility ] = useState(false); 

  const data = {
    datasets: [
      {
        data: [88, 96, 91, 97, 93, 95],
      }
    ]
  };

  /* LOGIC FOR BPM UPDATE */
  const heartRateValues = [ 80, 82, 83, 81, 78, 76, 102, 108, 110, 120, 121, 121, 111, 115, 81, 84, 78, 77, 85,  ]; 
  const heartRateCount = heartRateValues.length; 
  let counter = 0; 
  const [ heartRate, setHeartRate ] = useState(110);
  const onStart = () => {
    setInterval(() => {
      setHeartRate(heartRateValues[counter % heartRateCount]);  
      counter+=1; 
      console.log(counter); 
      if (heartRateValues[counter-1 % heartRateCount] < 100 && heartRateValues[counter % heartRateCount] >= 100) {
        console.log("show modal"); 
        setTimeout(() => setModalVisibility(true), 1000); 
      }
    }
    , 2000); 
  }


  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    fillShadowGradient: '#ED64A5', 
    fillShadowGradientOpacity: 0.5, 
    color: () => '#ED64A5',
    strokeWidth: 4,
    useShadowColorFromDataset: false 
  };

  return (
    <View style={styles.master_view}>
      <LinearGradient style={styles.header} colors={['#ff5e81', '#ffbb75']}>
        <Image source={chillaxHero} style={styles.chillax_hero}/>
        <TouchableOpacity style={styles.icon_menu_view}>
          <Image style={styles.icon_menu} source={menu} />
        </TouchableOpacity>
        <Text style={styles.header_title}>Hi <Text style={{fontFamily: 'OpenSans_600SemiBold'}}>Kristen</Text>!</Text>
        <Text style={styles.header_subtitle}>It looks like a lovely day outside, enjoy your weekend. We will be here for you. </Text>
      </LinearGradient>
      <View style={styles.main_view}>
        <View style={styles.graph_view}>
          <LineChart 
            data={data} 
            bezier 
            chartConfig={chartConfig} 
            height={height/4} 
            width={width*1.36} 
            withInnerLines={false} 
            withOuterLines={false} 
            withHorizontalLabels={false}
            hidePointsAtIndex={[...Array(data.datasets[0].data.length-1).keys()]}
          />
          <View style={styles.heartbeat_indicator_view}>
            <Text style={styles.heartbeat_indicator_text}>
              {heartRate.toString()}{'\n'}BPM
            </Text>
            <View style={styles.heartbeat_indicator_dot}/>
          </View>
        </View>
        <View style={styles.bottom_view}>
          <View style={styles.bottom_view_first_row}>
            <TouchableOpacity style={styles.button_orange_left} activeOpacity={0.3} onPress={onStart}>
              <Text style={styles.text_white}>Past{'\n'}Events</Text>
              <Image style={styles.icon_past_event} source={pastEvent}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button_orange_right} activeOpacity={0.3} onPress={() => clearInterval()}>
              <Text style={styles.text_white}>Articles{'\n'}for Me</Text>
              <Image style={styles.icon_articles} source={articles}/>
            </TouchableOpacity>
          </View>
          <BadoopButton title_text={'Call for Help'} button_style={'peach'} on_press={() => setModalVisibility(true)}/>
        </View>
      </View>
      <DistressNotifModal modal_visible={modalVisible} dismiss_modal={() => setModalVisibility(false)} />
    </View>
  )
}

const styles = StyleSheet.create({
  master_view: {
    flexDirection: 'column', 
    flex: 1, 
  }, 
  header: {
    flex: 36, 
    borderBottomLeftRadius: 36, 
    borderBottomRightRadius: 36,
    flexDirection: 'column'
  }, 
  main_view: {
    flex: 64, 
    flexDirection: 'column'
  }, 
  chillax_hero: {
    width: '64%', 
    resizeMode: 'contain', 
    position: 'absolute', 
    top: '-15%', 
    right: 0
  }, 
  graph_view: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'flex-end'
  }, 
  bottom_view: {
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
  }, 
  bottom_view_first_row: {
    flexDirection: 'row', 
    paddingVertical: 24,
    marginHorizontal: '12.5%'
  }, 
  button_orange_left: {
    flex: 1, 
    borderRadius: 12,
    backgroundColor: "#FF8100",
    paddingVertical: 12, 
    paddingHorizontal: 16,
    marginEnd: 12, 
    flexDirection: 'row'
  }, 
  button_orange_right: {
    flex: 1, 
    borderRadius: 12,
    backgroundColor: "#ff9e3b",
    paddingVertical: 12, 
    paddingHorizontal: 16,
    marginStart: 12, 
    flexDirection: 'row', 
    alignItems: 'center'
  }, 
  text_white: {
    fontFamily: 'OpenSans_400Regular', 
    fontSize: 18, 
    textAlign: 'left', 
    color: '#ffffff'
  }, 
  icon_past_event: {
    alignSelf: 'center', 
    position: 'absolute', 
    right: 12,
    width: 24, 
    height: 24, 
    resizeMode: 'contain'
  }, 
  icon_articles: {
    alignSelf: 'center', 
    position: 'absolute', 
    right: 12,
    width: 36, 
    height: 36, 
    resizeMode: 'contain'
  }, 
  icon_menu: {
    width: 24, 
    height: 24, 
    resizeMode: 'contain'
  }, 
  icon_menu_view: {
    position: 'absolute', 
    top: 36, 
    right: 24
  }, 
  header_title: {
    marginLeft: 36, 
    marginTop: 40, 
    fontFamily: 'OpenSans_400Regular', 
    fontSize: 36, 
    textAlign: 'left', 
    color: '#ffffff'
  }, 
  header_subtitle: {
    marginLeft: 36, 
    marginTop: 24, 
    fontFamily: 'OpenSans_400Regular', 
    fontSize: 18, 
    textAlign: 'left', 
    color: '#ffffff', 
    width: '50%'
  }, 
  heartbeat_indicator_view: {
    borderRadius: 12, 
    backgroundColor: '#FB958B', 
    opacity: 0.9, 
    width: 60, 
    height: 100, 
    alignItems: 'flex-start', 
    position: 'absolute', 
    bottom: 120, 
    alignItems: 'center', 
    flexDirection: 'column'
  }, 
  heartbeat_indicator_text: {
    color: '#ffffff', 
    fontSize: 18, 
    fontFamily: 'OpenSans_600SemiBold', 
    textAlign: 'center', 
    marginVertical: 12
  }, 
  heartbeat_indicator_dot: {
    color: "#E50D66", 
    width: 6, 
    height: 6, 
    borderRadius: 3, 
    alignSelf: 'center'
  }
}); 

export default MainScreen; 