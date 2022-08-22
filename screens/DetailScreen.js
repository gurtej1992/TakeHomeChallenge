import { Text, View,StyleSheet,Image } from "react-native";
import { GlobalStyles } from "../constants/style";
import React, { useEffect } from "react";

function DetailScreen({route,navigation}) {
    const { data } = route.params
    useEffect(() => {
        navigation.setOptions({
          title: data.title,
        });
      }, [data, navigation]);
    return (
        <View style={styles.container}>
            <Image
            style={styles.image}
            source={{uri: data.url}}
            resizeMode="cover"
          />
            <Text style={styles.decription}>{data.explanation}</Text>
            </View>
    );
}
const styles = StyleSheet.create({

    container: {
        flex : 1,
        width: "100%",
        backgroundColor: GlobalStyles.colors.moonDust0,
    },
      decription: {
        flex : 1,
        margin: 15,
        fontSize: 16,
        //fontWeight:0.4,
        marginBottom: 10,
        color: GlobalStyles.colors.moonDust900,
      },
      image: {
        marginTop : 10,
        marginBottom : 10,
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius : 5,
      },
     
  });
export default DetailScreen;