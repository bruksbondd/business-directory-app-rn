import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/Colors'
import Category, { ICategory } from './../../components/Home/Category'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfig'
import ExploreBusinessList from '@/components/Explore/ExploreBusinessList'
import { IBusiness } from '@/components/Home/PopularBusinessList'
export default function explore() {


  const  [businessList,setBusinessList] = useState<Array<IBusiness>>([]);
  const GetBusinessByCategory=async(category: ICategory)=>{
    setBusinessList([]);
    const q=query(collection(db,'BusinessList'),where('category','==',category))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=>{
      console.log(doc.data())
      setBusinessList(prev=>[...prev,{id:doc.id,...doc.data()}])
    })
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
        onCategorySelect={(category: ICategory)=>GetBusinessByCategory(category)}
      />
      <ExploreBusinessList
      businessList={businessList}/>
    </View>
  )
}