import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { sortCategoryData } from '../constants'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { Color } from '../constants/colors';


export default function SortCategories() {
  const [activeSort, setActiveSort] = useState('Popular');
  return (
    <View style={styles.container}>
      {
        sortCategoryData.map((sort, index) => {
          let isActive = sort == activeSort;
          let activeButton = isActive ? { backgroundColor: "#fff" } : "{}"
          let activeText = isActive ? { color: Color, fontWeight: '800' } : "{}"
          return (
            <TouchableOpacity style={[activeButton, styles.sCB]} onPress={() => setActiveSort(sort)} key={index} >
              <Text style={[styles.button, activeText]}>{sort}</Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 16,
    backgroundColor: '#f1f1f1',
    borderRadius: 50,
    padding: 6,
    paddingHorizontal: 12,
    marginHorizontal: 16,

  },
  button: {
    fontSize: widthPercentageToDP(4),
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 50,
    display: 'flex',
    fontWeight: '600',
  },
  sCB: {
    borderRadius: 50
  }
})