import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import React, { useEffect} from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Location() {
  //TOP RIGHT MENU
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Link href="/location-quiz" >
            <Text>Quiz</Text>
        </Link>
      ),
    });
  }, [navigation]);
  //SCREEN UI
  return (
    <View style={{ flex: 1 }}>      
      <Text></Text>      
    </View>
  );
}


