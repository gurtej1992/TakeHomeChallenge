import { Text, View, StyleSheet,FlatList,Image } from "react-native";
import { TextInput } from 'react-native-paper';
import Button from "../componets/Button";
import { GlobalStyles } from "../constants/style";
import React, { useEffect, useState } from "react";

function HomeScreen() {
    const [dataSource, setDataSource] = useState([]);
 
    useEffect(() => {
      let items = Array.apply(null, Array(9)).map((v, i) => {
        return {
          id: i,
          src: 'http://via.placeholder.com/200x200?text=' + (i + 1)
        };
      });
      setDataSource(items);
    }, []);
    return (<View style={styles.container}>
        <Text style={styles.heading}>Picture of the day:</Text>
        <Text style={styles.subheading}>Search for Astronomy: Picture of the day by date.</Text>
        <TextInput style={styles.input}
        fontFamily = "Inter-Regular"
        underlineColor = {GlobalStyles.colors.moonDust50}
        label="Start Date"
      
      />
        <TextInput style={styles.input}
        underlineColor = {GlobalStyles.colors.moonDust50}
        fontFamily = "Inter-Regular"
        label="End Date"
      />
      <Button>Search</Button>
      <Text style={styles.result}>Results(0):</Text>
      
      {dataSource.length > 0 ? 
      <FlatList
      data={dataSource}
      renderItem={({item}) => (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            margin: 1
          }}>
          <Image
            style={styles.imageThumbnail}
            source={{uri: item.src}}
          />
        </View>
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
        flex : 1,
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
        fontWeight:400,
        marginBottom: 10,
        color: GlobalStyles.colors.moonDust900,
      },
      result: {
        marginTop: 20,
        fontFamily: 'Inter-Regular', 
        fontSize: 16,
        fontWeight:600,
        marginBottom: 10,
        color: GlobalStyles.colors.moonDust700,
      },
      noResult: {
        marginTop: 10,
        fontFamily: 'Inter-Regular', 
        fontSize: 16,
        fontWeight:400,
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
        margin : 5,
        borderRadius : 5,
      },
  });
export default HomeScreen;