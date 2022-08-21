import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../constants/style';


function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    borderWidth: 2,
    padding: 12,
    width: "100%",
    borderColor: GlobalStyles.colors.moonDust500,
    backgroundColor: GlobalStyles.colors.moonDust50,
  },
  flat: {
    backgroundColor: 'white',
  },
  buttonText: {
    color: GlobalStyles.colors.moonDust700,
    fontSize : 18,
    textAlign: 'center',
  },
  flatText: {
    color: 'black',
  },
  pressed: {
    opacity: 0.70,
    backgroundColor: "pink",
    borderRadius: 20,
  },
});