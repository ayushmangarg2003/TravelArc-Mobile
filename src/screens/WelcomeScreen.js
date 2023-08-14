import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import {Color} from '../constants/colors'

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/mountain.jpg')}
      />
      <View style={styles.bottomContainer}>
        <LinearGradient
          colors={['transparent', 'rgba(3, 105, 160, 0.75)']}
          style={styles.gradient}
          start={{x:0.5 , y:0}}
          end={{x:0.5 , y:1}}
        />
        <View style={styles.textContainer} >
          <Text style={styles.title}>New Journey, New Story!</Text>
          <Text style={styles.subtitle}>Choose Your Favourite Destination</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.button}>
          <Text style={styles.buttonText}>Explore</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end'
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  bottomContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 40,
    padding: 5,
    paddingBottom: 30,
  },
  textContainer: {
    marginVertical: 28,
  },
  title: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: widthPercentageToDP(10),
  },
  subtitle: {
    color: '#fdfdfd',
    fontSize: widthPercentageToDP(5),
  },
  button: {
    width: 'auto',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    backgroundColor: Color,
    fontWeight: 'bold',
    fontSize: widthPercentageToDP(5),
    padding: 8,
    paddingHorizontal: 40,
    borderRadius: 50,
  },
  gradient:{
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(60),
    position:'absolute',
    bottom:0,
  }
})