import { View, Text, SafeAreaView, SafeAreaViewBase, ScrollView } from 'react-native'
import React from 'react'
import HeaderTab from '../components/HeaderTab'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import ResturantItem from '../components/ResturantItem'

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTab />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <ResturantItem/>
      </ScrollView>



    </SafeAreaView>

  )
}