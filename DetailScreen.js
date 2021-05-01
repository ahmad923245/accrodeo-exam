import React from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Header from './Header'

const DetailScreen = ({ navigation, route }) => {
    const { item, data } = route.params
    console.log(data)
    return (
        <>
        <View style={styles.header}>
            <Text style={{ color: '#fff', alignSelf: 'center',fontSize: 20,top:15 }}>Details</Text>
            
                  <TouchableOpacity
                style={styles.bckBtn}
                onPress={() => navigation.goBack()}>

                   
                      <Ionicons color="#fff" size={25} name="arrow-back" /> 
                  
               

            </TouchableOpacity>
          
           

        </View>
        <View style={{ flex: 1,padding:30 }}>
        
            <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10, alignSelf: 'center' }}>{item}</Text>
            <View >
                <View style={{flexDirection:'row',alignItems:'center',margin:5}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Level 1:</Text>

                <Text>{data['Offence Level 2 Description']} </Text>

                </View>

                <View style={{flexDirection:'row',alignItems:'center',margin:5}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Level 2 :</Text>
                <Text> {data['Offence Level 2 Description']}</Text>

                </View>
                <View style={{flexDirection:'row',alignItems:'center',margin:5}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Level 3 :</Text>
                <Text> {data['Offence Level 3 Description']}</Text>

                </View>
               

                <View style={{flexDirection:'row',alignItems:'center',margin:5}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Offence count :</Text>
                <Text style={{fontSize:19}}> {data['Offence count']}</Text>

                </View>
                <View style={{flexDirection:'row',alignItems:'center',margin:5}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Postcode - Incident :</Text>
                <Text style={{fontSize:19}}> {data['Postcode - Incident']}</Text>

                </View>
                <View style={{flexDirection:'row',alignItems:'center',margin:5}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Reported Date :</Text>
                <Text> {data['Reported Date']}</Text>

                </View>
                <View style={{flexDirection:'row',alignItems:'center',margin:5}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Suburb - Incident :</Text>
                <Text> {data['Suburb - Incident']}</Text>

                </View>
            </View>
        </View>
        </>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
   
    header: {
        justifyContent:"center",
        marginTop: 30,
        height: 65,
        width: '100%',
        backgroundColor: '#1C71A1'

    },
    bckBtn:{
        left:20,
        marginBottom:10
    }
})
