import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, DocumentData, getDocs, query } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";

interface ISlider {
  name?: string;
  imageUrl?: string;
}

export default function Slider() {
  const [sliderList, setSliderList] = useState<Array<ISlider>>([]);
  useEffect(() => {
    GetSliderList();
  }, []);

  const GetSliderList = async () => {
    setSliderList([]);
    const q = query(collection(db, "Slider"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setSliderList((prev) => [...prev, doc.data()]);
    });
  };

  return (
    <View>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 20,
          paddingTop: 20,
          paddingLeft: 20,
          marginBottom:5
        }}
      >
        #Specialy for you
      </Text>
      <FlatList
        data={sliderList}
        style={{ paddingLeft: 20 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Image
            source={{ uri: item.imageUrl }}
            style={{
              height: 150,
              width: 300,
              borderRadius: 15,
              marginRight: 15,
            }}
          />
        )}
      />
    </View>
  );
}
