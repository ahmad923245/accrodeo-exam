import React, { useState, useEffect } from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View, Button, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import Accroden from './Accroden'
import { List } from 'react-native-paper';

import _ from 'lodash';
const url = "https://data.sa.gov.au/data/api/3/action/datastore_search?resource_id=590083cd-be2f-4a6c-871e-0ec4c717717b"
const HomeScreen = ({ navigation }) => {
    const [data, SetData] = useState({})
    const [selectedLanguage, setSelectedLanguage] = useState('Suburb');
    const [groupedData, setgroupedData] = useState({})


    useEffect(() => {


        fetch(url)
            .then(res => res.json())
            .then(data => {
                SetData(data)
                // console.log('so this is the data from arrayss',data.result.records))

            })
            .catch(err => console.log(err))


    }, [])

    useEffect(() => {
        if (data.result) {

            var grouped = _.groupBy(data.result.records, function (car) {


                let filter = selectedLanguage == 'Suburb' ? 'Suburb - Incident' : 'Offence Level 2 Description'
                return car[filter];
            })
            console.log(grouped)
            setgroupedData(grouped)
        }
    }, [data, selectedLanguage])



    return (
        <View style={{ flex: 1, margin: StatusBar.currentHeight }}>

            <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center', padding: 10 }}>Demo Api</Text>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10 }}>Group by</Text>
                <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="Suburb" value="Suburb" />
                    <Picker.Item label="Offence Level 2 Description" value="Offence Level 2 Description" />
                </Picker>

                <View >
                    {
                        Object.keys(groupedData).map((item, i) => {

                            return (
                                <View style={{ borderWidth: 1, borderRadius: 10, marginBottom: 4 }}>
                                    <List.Accordion


                                        key={i}
                                        title={item}
                                    >

                                        {
                                            groupedData[item].map((val, i) => {

                                                return <List.Item
                                                    onPress={() => navigation.navigate('Details', {
                                                        item,
                                                        data: groupedData[item]
                                                    })}
                                                    title={`(${val['Reported Date']}) ` + val['Offence Level 1 Description']} />
                                            })
                                        }


                                    </List.Accordion></View>)
                        })
                    }



                </View>

            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})
