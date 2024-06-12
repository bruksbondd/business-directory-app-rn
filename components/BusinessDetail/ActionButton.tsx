import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
  Share,
} from "react-native";
import React from "react";
import { IBusinessProps } from "./Intro";

interface IItem {
  id: number;
  name: string;
  icon: string;
  url: string;
}

export default function ActionButton({ business }: IBusinessProps) {
  const actionButtonMenu = [
    {
      id: 1,
      name: "Call",
      icon: require("./../../assets/images/call.png"),
      url: "tel:" + business?.contact,
    },
    {
      id: 2,
      name: "Location",
      icon: require("./../../assets/images/location.png"),
      url:
        "https://www.google.com/maps/search/?api=1&query=" + business?.address,
    },
    {
      id: 3,
      name: "Web",
      icon: require("./../../assets/images/web.png"),
      url: "https://" + business?.website,
    },
    {
      id: 4,
      name: "Share",
      icon: require("./../../assets/images/share.png"),
      url: "" + business?.website,
    },
  ];

  const OnPressHandle = (item: IItem) => {
    if (item.name == "Share") {
      Share.share({
        message:
          business?.name +
          "\n Address:" +
          business?.address +
          "\n Find More Details on Business App",
      });
      return;
    }
    Linking.openURL(item.url);
  };
  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 20,
        marginTop: -20,
      }}
    >
      <FlatList
        data={actionButtonMenu}
        numColumns={4}
        scrollEnabled={false}
        keyExtractor={(item, index) => `key-${index}`}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <TouchableOpacity key={item.id} onPress={() => OnPressHandle(item)}>
            <Image
              source={item?.icon}
              style={{
                width: 30,
                height: 30,
              }}
            />
            <Text
              style={{
                fontFamily: "outfit-medium",
                textAlign: "center",
                marginTop: 3,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
