import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Header = ({ title, goBackFunc }) => {
    return (
        <View style={styles.header}>
            <Text style={{ color: '#fff', alignSelf: 'center',fontSize: 20 }}>{title}</Text>
            {
                goBackFunc == true ?  <TouchableOpacity
                style={styles.bckBtn}
                onPress={() => navigation.goBack()}>

                   
                        goBackFunc ?  <Ionicons size={25} name="arrow-back" /> :  null
                  
               

            </TouchableOpacity>: null
            }
           

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        justifyContent:"center",
        marginTop: 30,
        height: 65,
        width: '100%',
        backgroundColor: '#1C71A1'

    },

})
