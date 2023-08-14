import { View, Text, Image, TouchableOpacity, ScrollView, Platform, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { ClockIcon, HeartIcon, MapPinIcon, SunIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { Color } from '../constants/colors'

const ios = Platform.OS == 'ios';
const topMargin = ios ? '' : { marginTop: 40 };

export default function DestinationScreen(props) {
  const item = props.route.params;
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);

  return (
    <View style={styles.container} >
      <Image source={item.image} style={{ width: widthPercentageToDP(100), height: heightPercentageToDP(50) }} />
      <StatusBar style={'light'} />

      <SafeAreaView style={[topMargin, styles.btnContainer]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <ChevronLeftIcon size={widthPercentageToDP(7)} strokeWidth={4} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleFavourite(!isFavourite)}
          style={styles.likeBtn}
        >
          <HeartIcon size={widthPercentageToDP(7)} strokeWidth={4} color={isFavourite ? "red" : "white"} />
        </TouchableOpacity>
      </SafeAreaView>

      <View style={styles.bottom} >
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginVertical: '1.25rem' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Text style={{
              fontSize: widthPercentageToDP(7), fontWeight: 'bold', color: '#333', flexGrow: 1,
              flexShrink: 1,
              flexBasis: '0%'
            }}>
              {item?.title}
            </Text>
            <Text style={{ fontSize: widthPercentageToDP(7), fontWeight: '600' }}>
              ₹ {item?.price}
            </Text>
          </View>

          <Text style={{ fontSize: widthPercentageToDP(3.7), marginVertical: 16, color: '#333' }}>{item?.longDescription}</Text>

          <View style={{ flexDirection: 'row', marginHorizontal: '4', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', marginHorizontal: '1.25rem', alignItems: 'flex-start' }}>
              <ClockIcon size={widthPercentageToDP(7)} color="skyblue" />
              <View style={{ display: 'flex', marginVertical: '1.25rem' }}>
                <Text style={{ fontSize: widthPercentageToDP(4.5), fontWeight: 'bold', color: '#333' }}>{item.duration}</Text>
                <Text style={{ color: "#555" }}>Duration</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: '1.25rem', alignItems: 'flex-start' }}>
              <MapPinIcon size={widthPercentageToDP(7)} color="#f87171" />
              <View style={{ display: 'flex', marginVertical: '1.25rem' }}>
                <Text style={{ fontSize: widthPercentageToDP(4.5), fontWeight: 'bold', color: '#333' }}>{item.distance}</Text>
                <Text style={{ color: "#555" }}>Distance</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: '1.25rem', alignItems: 'flex-start' }}>
              <SunIcon size={widthPercentageToDP(7)} color="orange" />
              <View style={{ display: 'flex', marginVertical: '1.25rem' }}>
                <Text style={{ fontSize: widthPercentageToDP(4.5), fontWeight: 'bold', color: '#333' }}>{item.weather}</Text>
                <Text style={{ color: "#555" }}>Sunny</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.bookNow}>
          <Text style={{ fontSize: widthPercentageToDP(5.5), fontWeight: 'bold', color: '#fff' }}>Book now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%'
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: '100%',
    position: 'absolute',
  },
  backBtn: {
    padding: 8,
    borderRadius: 50,
    marginLeft: 16,
    backgroundColor: 'rgba(255,255,255,0.5)'
  },
  likeBtn: {
    padding: 8,
    borderRadius: 50,
    marginRight: 16,
    backgroundColor: 'rgba(255,255,255,0.5)'
  },
  bottom: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    backgroundColor: "#fff",
    marginTop: '-3.5rem',
    paddingTop: 32,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  bookNow: {
    height: widthPercentageToDP(15),
    width: '100%',
    marginBottom: 24,
    marginHorizontal: 'auto',
    backgroundColor: Color,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  }
})