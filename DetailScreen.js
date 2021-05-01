import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

const DetailScreen = ({ navigatio, route }) => {
    const { item, data } = route.params
    console.log(data)
    return (
        <View style={{ flex: 1, margin: StatusBar.currentHeight }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10 }}>{item}</Text>
            <View>
                <Text> Level: {data['Offence Level 2 Description']} Dated : {data['Reported Date']}</Text>
            </View>
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({})
