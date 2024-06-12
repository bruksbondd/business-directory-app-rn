import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";
import CategoryItem from "./CategoryItem";

interface ICategory {
  name?: string;
  icon?: string;
  id?: number;
}

export default function Category() {
  const [categoryList, setCategoryList] = useState<Array<ICategory>>([]);
  useEffect(() => {
    GetCategoryList();
  }, []);

  const GetCategoryList = async () => {
    setCategoryList([]);
    const q = query(collection(db, "Category"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setCategoryList((prev) => [...prev, doc.data()]);
    });
  };

  const onCategoryPressHandler = (item: ICategory) => {
    console.log(item);
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
          Category
        </Text>
        <Text style={{ color: Colors.PRIMARY, fontFamily: "outfit-medium" }}>
          Viev All
        </Text>
      </View>
      <FlatList
        data={categoryList}
        style={{ marginLeft: 20 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <CategoryItem
            key={index}
            category={item}
            onCategoryPress={(category: ICategory) =>
              onCategoryPressHandler(category)
            }
          />
        )}
      />
    </View>
  );
}
