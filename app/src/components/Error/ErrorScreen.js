import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "../../style/styles";

const ErrorScreen = (props) => {
  
  return (
    <SafeAreaView>
      <View style={styles.baseContainer}>
        <Text style={styles.titleText}>
          Sorry there was an error that occured
        </Text>
        <TouchableOpacity onPress={props.resetError}>
          <Text style={styles.buttonText}>reset error</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ErrorScreen;
