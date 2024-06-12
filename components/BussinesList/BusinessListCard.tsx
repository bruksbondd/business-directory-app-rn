import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { IBusiness } from "../Home/PopularBusinessList";
import { useRouter } from "expo-router";

interface IBusinessCard {
  business: IBusiness;
}

export default function BusinessListCard({ business }: IBusinessCard) {
  const router = useRouter();
  return (
   
    <TouchableOpacity style={{
        padding:10,
        margin:10,
        borderRadius:15,
        backgroundColor:'#fff',
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    }}
    onPress={()=>router.push('/businessdetail/'+business.id)}
    >
      <Image source= {{uri:business.imageUrl}}
      style ={{
        width:120,
        height:120,
        borderRadius:15
      }}/>
      <View style={{
        flex:1,
        gap :7
      }}>
        <Text style={{
          fontFamily:'outfit-bold',
          fontSize:20
        }}>{business.name}</Text>
        <Text style={{
          fontFamily:'outfit',
          color:'#b3b3b3'
        }}>{business.address}</Text>
        <View style={{display:'flex',flexDirection:'row',gap:5}}>
                <Image source ={require('./../../assets/images/star.png')}
                style={{
                    height:15,
                    width:15
                }}/>
                <Text style={{
                    fontFamily:'outfit', fontSize:12
                }}>4.5</Text>
            </View>
      </View>
    </TouchableOpacity>
  );
}
