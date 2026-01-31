import React from "react";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
  <ScrollView style={{ flex: 1}}>
    <View style ={styles.container}>

      <Link href="/ant" style={styles.link}>
        <Text style={styles.linkText}>heros</Text>
      </Link>

    </View>

  </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  gap: 15
  },
  link: {

  },
  linkText:{

  }
})