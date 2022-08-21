import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-paper';
import Button from "../componets/Button";
import { GlobalStyles } from "../constants/style";
import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { fetchPictures } from "../util/http";


function HomeScreen({ navigation }) {
    const [dataSource, setDataSource] = useState([]);
    const [startDate, setStartDate] = useState("2022-08-15");
    const [endDate, setEndDate] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const baseUrl = 'https://api.nasa.gov/planetary/apod';

    async function handleClick() {
        setIsLoading(true);
        const res = await fetchPictures(startDate, endDate);
        setDataSource(res.data)
        setIsLoading(false);
    }
    function actionOnRow(item) {
        navigation.navigate('Detail', { data: item });
    }

    return (<View style={styles.container}>
        <Text style={styles.heading}>Picture of the day:</Text>
        <Text style={styles.subheading}>Search for Astronomy: Picture of the day by date.</Text>
        <TextInput style={styles.input}
            fontFamily="Inter-Regular"
            underlineColor={GlobalStyles.colors.moonDust50}
            label="Start Date"
            value={startDate}
            onChangeText={text => setStartDate(text)}

        />
        <TextInput style={styles.input}
            underlineColor={GlobalStyles.colors.moonDust50}
            fontFamily="Inter-Regular"
            label="End Date"
            value={endDate}
            onChangeText={text => setEndDate(text)}
        />
        <Button onPress={handleClick}>Search</Button>
        <Text style={styles.result}>Results({dataSource.length > 0 ? dataSource.length : 0}):</Text>

        {dataSource.length > 0 ?
            <FlatList
                data={dataSource}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => actionOnRow(item)}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'column',
                                margin: 1
                            }}>
                            <Image
                                style={styles.imageThumbnail}
                                source={{ uri: item.url }}
                            />
                        </View>
                    </TouchableOpacity>
                )}
                //Setting the number of column
                numColumns={3}
                keyExtractor={(item, index) => index}
            />
            : <Text style={styles.resunoResultlt}>No results found. Enter a start and end date.</Text>}

    </View>);
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: "100%",
        padding: 20,
        backgroundColor: GlobalStyles.colors.moonDust0,
    },
    heading: {
        fontFamily: 'Inter-Semi-Bold',
        fontSize: 18,
        marginBottom: 10,
        color: GlobalStyles.colors.moonDust900,
    },
    subheading: {
        fontFamily: 'SF-Pro-Regular',
        fontSize: 14,
        fontWeight: 400,
        marginBottom: 10,
        color: GlobalStyles.colors.moonDust900,
    },
    result: {
        marginTop: 20,
        fontFamily: 'Inter-Regular',
        fontSize: 16,
        fontWeight: 600,
        marginBottom: 10,
        color: GlobalStyles.colors.moonDust700,
    },
    noResult: {
        marginTop: 10,
        fontFamily: 'Inter-Regular',
        fontSize: 16,
        fontWeight: 400,
        marginBottom: 10,
        color: GlobalStyles.colors.moonDust900,
    },
    input: {
        borderBottomWidth: 0,
        backgroundColor: GlobalStyles.colors.moonDust50,
        marginBottom: 10,
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        margin: 5,
        borderRadius: 5,
    },
});
export default HomeScreen;