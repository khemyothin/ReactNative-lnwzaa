import React from "react";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
  <ScrollView>
    <View style ={styles.container}>

      <Link href="/ant" style={styles.link}>
        <Text style={styles.linkText}>heros</Text>
      </Link>

      <Link href="/Pikachu" style={styles.link}>
        <Text style={styles.linkText}>pokemon</Text>
      </Link>

      <Link href="/health" style={styles.link}>
        <Text style={styles.linkText}>Health</Text>
      </Link>

      <Link href="/home" style={styles.link}>
        <Text style={styles.linkText}>Home</Text>
      </Link>

      <Link href="/flatlistexample" style={styles.link}>
        <Text style={styles.linkText}>FlatList Example</Text>
      </Link>

      <Link href="/location" style={styles.link}>
        <Text style={styles.linkText}>Location</Text>
      </Link>

      <Link href="/book" style={styles.link}>
        <Text style={styles.linkText}>Book</Text>
      </Link>

      <Link href="/book-online" style={styles.link}>
        <Text style={styles.linkText}>Book Online</Text>
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
    padding: 20,
    backgroundColor: '#000000ff',
    borderRadius: 10,

  },
  linkText:{
    fontSize: 18,
    color: '#e65613ff'

  }
})