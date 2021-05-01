import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

const DetailScreen = ({navigatio,route}) => {
    const {item,groupedData} = route.params
    console.log(groupedData[item])
    return (
        <View style={{flex:1,margin:StatusBar.currentHeight}}>
            <Text style={{fontWeight:'bold',fontSize:20,padding:10}}>{item}</Text>

                {
                    groupedData[item].map((item,i)=>{
                        return(
                            <View key={i}>
                                <Text > Level: {item['Offence Level 2 Description']} Dated : {item['Reported Date']}</Text>
                            </View>
                        )
                    })
                }
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({})
