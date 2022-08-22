import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from "react-native";
import { ActivityIndicator, TextInput } from 'react-native-paper';
import Button from "../componets/Button";
import { GlobalStyles } from "../constants/style";
import React, { Component, useState } from 'react';
import { fetchPictures } from "../util/http";
import { validateDate, validateNoBeforeFirstDayDate, validateNoFutureDate, validateRangeBetween100 } from "../util/validation";
import { showAlert } from "../util/helper";


function HomeScreen({ navigation }) {
  const [dataSource, setDataSource] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  async function handleClick() {
    //Validating dates
    if (validateNoBeforeFirstDayDate(startDate) && validateNoBeforeFirstDayDate(endDate)) {
      if (validateNoFutureDate(startDate) && validateNoFutureDate(endDate)) {
        if (validateDate(startDate) && validateDate(endDate)) {
          var dateStart = new Date(startDate);
          var dateEnd = new Date(endDate);
          if (dateEnd.getTime() >= dateStart.getTime()) {
              //Calling API
              setIsLoading(true);
              const res = await fetchPictures(startDate, endDate);
              setDataSource(res.data)
              setIsLoading(false);
          }
          else {
            //Showing alert if end date is smaller than start date
            showAlert("End date cannot be smaller than start date.")
          }
        }
        else {
          //Showing alert if date is not in valid format
          showAlert("Date should be in YYYY-MM-DD format.")
        }
      }
      else {
        //Showing alert if date is larger than todays date
        showAlert("Date cannot be larger than today's date")
      }
    }
    else {
      //Date Must be after 1995-06-16, the first day an APOD picture was posted
      showAlert("Date Must be after 1995-06-16, the first day an APOD picture was posted.")
    }
  }


  // On clicking the image item moving to detail screen
  function actionOnRow(item) {
    navigation.navigate('Detail', { data: item });
  }

  return (<View style={styles.container}>
    {isLoading && <ActivityIndicator style={styles.indicator} color={GlobalStyles.colors.moonDust900} />}
    <Text style={styles.heading}>Picture of the day:</Text>
    <Text style={styles.subheading}>Search for Astronomy: Picture of the day by date.</Text>
    <TextInput style={styles.input}
      underlineColor={GlobalStyles.colors.moonDust50}
      label="Start Date"
      value={startDate}
      onChangeText={text => setStartDate(text)}

    />
    <TextInput style={styles.input}
      underlineColor={GlobalStyles.colors.moonDust50}
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
  indicator:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    fontWeight: '500',
    fontSize: 18,
    marginBottom: 10,
    color: GlobalStyles.colors.moonDust900,
  },
  subheading: {
    fontFamily: 'SF-Pro-Regular',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 10,
    color: GlobalStyles.colors.moonDust900,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: GlobalStyles.colors.moonDust700,
  },
  noResult: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '400',
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