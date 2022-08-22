import { Alert } from "react-native";

export function showAlert(message){
    Alert.alert(
        "Date Error",
        message,
        [
          {
            text: "Okay",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          }
        ]
      );
}