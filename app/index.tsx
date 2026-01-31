import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  <ScrollView style={{ flex: 1}}>
    <View style ={styles.container}>

      <Link href="/ant" style={styles.link}>
        <Text style={styles.linkText}>heros</Text>
      </Link>

    </View>

  </ScrollView>
}