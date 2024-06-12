import { ScrollView, View } from 'react-native'
import React from 'react'
import Header from '@/components/Home/Header'
import Slider from '@/components/Home/Slider'
import Category from '@/components/Home/Category'
import PopularBusinessList from '@/components/Home/PopularBusinessList'



export default function home() {
  return (
    <ScrollView>
      <Header />
      <Slider />
      <Category />
      <PopularBusinessList />

      <View style={{height:50}}>

      </View>
    </ScrollView>
  )
}