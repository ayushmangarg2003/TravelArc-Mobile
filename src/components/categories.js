import { Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import {Color} from '../constants/colors'
import {categoriesData} from '../constants/index'

export default function Categories() {
  return (
    <View style={{marginVertical:20}}>
      <View style={styles.categoryParent}>
        <Text style={styles.categoryText}>Categories</Text>
        <TouchableOpacity>
          <Text style={{fontSize:widthPercentageToDP(4) , fontWeight:'bold' , color:Color}}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
      horizontal
      contentContainerStyle={{paddingHorizontal:16}}
      style={{marginHorizontal:8}}
      showsHorizontalScrollIndicator={false}>
        {
          categoriesData.map((cat,index)=>{
            return (
              <TouchableOpacity key={index} style={styles.category}>
                <Image style={styles.catImg} source={cat.image}/>
                <Text style={styles.catText}>{cat.title}</Text>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  categoryParent:{
    marginHorizontal:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  categoryText:{
    fontWeight:'600',
    color:'#777777',
    fontSize:widthPercentageToDP(4)
  },
  category:{
    display:'flex',
    alignItems:'center',
    marginVertical:8,
    marginRight:12
  },
  catImg:{
    width:widthPercentageToDP(20),
    height:widthPercentageToDP(20),
    borderRadius:20,
  },
  catText:{
    fontSize:widthPercentageToDP(3.25),
    textAlign:'center',
    marginTop:4,
  }
})