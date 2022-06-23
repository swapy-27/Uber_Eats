import { View, Text, Image, TouchableOpacity, } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function ResturantItem() {
    return (
        <TouchableOpacity activeOpacity={1} style={{marginBottom:30}}>
        <View style={{marginTop:10 , padding:15 , backgroundColor:"white"}}>
            <ReasturantImage />
            <ResturantInfo />
        </View>
        </TouchableOpacity>
    )
}

const ReasturantImage = () => {

    return (
        <View>

            <Image style={{ height: 180, width: "100%" }} source={{ uri: "https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg" }} />

            <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
                <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
            </TouchableOpacity>

        </View>
    )

}

const ResturantInfo = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
            <View>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    Farmhouse Kitchen
                </Text>
                <Text style={{ fontSize: 13, color: 'gray' }}>
                    30-45 . min
                </Text>
            </View>
            <View
                style={{
                    backgroundColor: '#eee',
                    height: 30,
                    width: 30,
                    alignItems: "center",
                    borderRadius: 15
                }}>
                <Text style={{ fontWeight: "bold" }}>4.5</Text>
            </View>

        </View>

    )
}