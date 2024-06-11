import { View, Text, Image } from "react-native";
import React, { PropsWithChildren, ReactElement } from "react";

type Props = PropsWithChildren<{
  headerImage: ReactElement;
}>;

export default function LoginScreen() {
  return (
    <View>
      <Image
        source={require("./../assets/images/login.png")}
        style={{ width: 220, height: 450, borderRadius: 20 }}
      />
    </View>
  );
}
