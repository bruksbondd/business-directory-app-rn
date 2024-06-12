import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";
import PopularBusinessItem from "./PopularBusinessItem";
import { Colors } from "@/constants/Colors";

export interface IBusiness {
  name?: string;
  imageUrl?: string;
  about?: string;
  address?: string;
  category?: string;
  contact?: string;
  id?: string;
}

export default function PopularBusinessList() {
  const [businessList, setBusinessList] = useState<Array<IBusiness>>([]);
  useEffect(() => {
    GetBusinessList();
  }, []);
  const GetBusinessList = async () => {
    setBusinessList([]);
    const q = query(collection(db, "BusinessList"), limit(10));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setBusinessList((prev) => [...prev, { id: doc.id, ...doc.data() }]);
    });
  };

  return (
    <View>
      <View
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            marginTop: 5,
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          Popular Business
        </Text>
        <Text style={{ color: Colors.PRIMARY, fontFamily: "outfit-medium" }}>
          Viev All
        </Text>
      </View>
      <FlatList
        horizontal={true}
        data={businessList}
        renderItem={({ item, index }) => (
          <PopularBusinessItem key={index} business={item} />
        )}
      />
    </View>
  );
}
