import { View, Text, SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import About from '../components/ResturantDetail/About'

export default function ResturantDetails() {
  return (
    <SafeAreaView style={{backgroundColor:"grey " , flex:1}} >
      <About/>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    
})