import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

import ExploreBusinessList from '@/components/Explore/ExploreBusinessList'
import { IBusiness } from '@/components/Home/PopularBusinessList'

import Category, { ICategory } from '@/components/Home/Category'
import { Colors } from '@/constants/Colors'


export default function explore() {


  const  [businessList,setBusinessList] = useState<Array<IBusiness>>([]);

  const onHandleSelect = (doc: IBusiness[]) => {
    setBusinessList(doc)
  }
 
  return (
    <View style={{
      padding:20
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30
      }}>Exolore More</Text>
            <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        backgroundColor:'#fff',
        padding:10,
        marginHorizontal:10,
        marginTop : 15,
        borderRadius:8,
        borderColor:Colors.PRIMARY,
        borderWidth:1,
        marginBottom:10
      }}>
        <Ionicons name="search" size={24} color={Colors.PRIMARY} />
        <TextInput placeholder='search...'
        style={{
            fontFamily:'outfit',
            fontSize:16
        }} />
      </View>
      <Category
        explore={true}
        onCategorySelect={onHandleSelect}
      />
      <ExploreBusinessList
      businessList={businessList}/>
    </View>
  )
}