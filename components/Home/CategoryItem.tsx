import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
interface ICategoryProps {
  category: {
    name?: string;
    icon?: string;
    id?: number;
   
  };
  onCategoryPress: Function;
}

export default function CategoryItem({
  category,
  onCategoryPress,
}: ICategoryProps) {
  return (
    <TouchableOpacity onPress={() => onCategoryPress(category)}>
      <View
        style={{
          padding: 15,
          backgroundColor: Colors.ICON_BG,
          borderRadius: 99,
          marginRight: 15,
        }}
      >
        <Image
          source={{ uri: category.icon }}
          style={{
            height: 40,
            width: 40,
            borderRadius: 40,
          }}
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 12,
          fontFamily: "outfit",
        }}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
}
