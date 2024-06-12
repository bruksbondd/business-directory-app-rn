import { View, Text } from 'react-native'
import React from 'react'
import { IBusinessProps } from './Intro'

export default function About({business}: IBusinessProps) {
  return (
    <View style={{
        padding:20,
        backgroundColor:'#fff',
       
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20
      }}>About</Text>
      <Text style={{
        fontFamily:'outfit',
        lineHeight:20
      }}>{business?.about}</Text>
    </View>
  )
}