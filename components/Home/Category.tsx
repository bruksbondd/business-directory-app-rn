import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/configs/FirebaseConfig";
import CategoryItem from "./CategoryItem";
import { useRouter } from "expo-router";

export interface ICategory {
  name?: string;
  icon?: string;
  id?: number;
}

interface ICategoryProps {
  explore?: boolean;
  onCategorySelect?: Function;
}

export default function Category({
  explore = false,
  onCategorySelect,
}: ICategoryProps) {
  const [categoryList, setCategoryList] = useState<Array<ICategory>>([]);
  const router = useRouter();
  useEffect(() => {
    GetCategoryList();
  }, []);

  const GetCategoryList = async () => {
    setCategoryList([]);
    const q = query(collection(db, "Category"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setCategoryList((prev) => [...prev, doc.data()]);
    });
  };
  const onCategoryPressHandler = (item: ICategory) => {
    if (!explore) {
      router.push("/businesslist/" + item.name);
    } else {
      if (onCategorySelect) onCategorySelect(item.name);
    }
  };

  return (
    <View>
      {!explore && (
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
          <Text
            style={{
              fontFamily: "outfit-medium",
              color: Colors.PRIMARY,
            }}
          >
            View All
          </Text>
        </View>
      )}
      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginLeft: 20 }}
        renderItem={({ item, index }) => (
          <CategoryItem
            category={item}
            key={index}
            onCategoryPress={(category: ICategory) =>
              onCategoryPressHandler(category)
            }
          />
        )}
      />
    </View>
  );
}
