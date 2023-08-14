import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { destinationData } from '../constants'
import { LinearGradient } from 'expo-linear-gradient'
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default function Destinations() {
  return (
    <View style={styles.container}>
      {
        destinationData.map((item, index) => {
          return (
            <DestinationCard key={index} item={item} />
          )
        })
      }
    </View>
  )
}

const DestinationCard = ({ item }) => {
  const [isFavourite, toggleFavourite] = useState(false);
  const Navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => Navigation.navigate('Destination', { ...item })}
      style={styles.desCard}
    >
      <Image
        source={item.image}
        style={styles.desImage}
      />

      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.linearGradient}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />

      <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)} style={styles.desBtn} >
        <HeartIcon size={widthPercentageToDP(5)} color={isFavourite ? "red" : "white"} />
      </TouchableOpacity>

      <Text style={styles.desTitle}>{item.title}</Text>
      <Text style={styles.desSub}>{item.shortDescription}</Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  desCard: {
    width: widthPercentageToDP(44),
    height: widthPercentageToDP(65),
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'relative',
    padding: 16,
    paddingVertical: 24,
    marginBottom: 20,
  },
  desImage: {
    width: widthPercentageToDP(44),
    height: widthPercentageToDP(65),
    borderRadius: 35,
    position: 'absolute'
  },
  linearGradient: {
    width: widthPercentageToDP(44),
    height: heightPercentageToDP(15),
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    position: 'absolute',
    bottom: 0,
  },
  desBtn: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    position: 'absolute',
    top: 4,
    right: 12,
    borderRadius: 50,
    padding: 12,
  },
  desTitle: {
    fontSize: widthPercentageToDP(4),
    color: '#fff',
    fontWeight: '600',
  },
  desSub: {
    fontSize: widthPercentageToDP(2.2),
    color: '#fff',
  }
})