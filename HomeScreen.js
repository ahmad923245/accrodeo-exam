import React, { useState, useEffect } from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { List } from 'react-native-paper';

import _ from 'lodash';
const url = "https://data.sa.gov.au/data/api/3/action/datastore_search?resource_id=590083cd-be2f-4a6c-871e-0ec4c717717b"
const HomeScreen = ({ navigation }) => {
    const [data, SetData] = useState({})
    const [selectedLanguage, setSelectedLanguage] = useState('Suburb');
    const [loading, setLoading] = useState(true);
    const [groupedData, setgroupedData] = useState({})


    useEffect(() => {


        fetch(url)
            .then(res => res.json())
            .then(data => {
                SetData(data)
                setLoading(false)
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
            {loading ? (
          <ActivityIndicator
          style={{alignSelf:'center',}}
                size="large"
                color="green"
            visible={loading}
    
          />
        ) : (<ScrollView showsVerticalScrollIndicator={false}>




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
                                <View
                                key={i}
                                style={{ borderWidth: 1, borderRadius: 10, marginBottom: 4 }}>
                                    <List.Accordion
                                        key={i}
                                        title={item}
                                    >

                                        {
                                            groupedData[item].map((val, i) => {

                                                return <List.Item
                                                key={i}
                                                    onPress={() => navigation.navigate('Details', {
                                                        item,
                                                        data: val
                                                    })}
                                                    title={`(${val['Reported Date']}) ` + val['Offence Level 1 Description']} />
                                            })
                                        }


                                    </List.Accordion></View>)
                        })
                    }



                </View>

            </ScrollView>
             )
            }
          
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})
