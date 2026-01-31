import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Pikachu"
        options={{
          tabBarLabel: "หน้าหลัก",
          tabBarIcon: ({ color, size }) => ( <FontAwesome name="bug" color={color} size={size} /> ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Charmander"
        options={{
          tabBarLabel: "นก",
          tabBarIcon: ({ color, size }) => ( <FontAwesome name="twitter" color={color} size={size} /> ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Ivysour"
        options={{
          tabBarLabel: "แมว",
          tabBarIcon: ({ color, size }) => ( <FontAwesome name="paw" color={color} size={size} /> ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
