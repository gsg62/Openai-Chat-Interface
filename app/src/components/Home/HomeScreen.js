import { Button, Text, TextInput, View } from "react-native";
import { useState } from "react";

import styles from "../../style/styles";
import { useOpenaiApi } from "../../hooks/useOpenaiApi";

const HomeScreen = () => {
  const [newMessage, setNewMessage] = useState();
  const { messages, sendMessage, testEndpoint, setMessages } = useOpenaiApi();

  const handlePress = () => {
    const userMessage = {
      role: "user",
      content: newMessage,
    };
    setMessages([...messages, userMessage]);
    // sendMessage();
    // sendMessage();
    // testEndpoint();
  };

  return (
    <View style={styles.baseContainer}>
      <Text style={styles.titleText}>chat interface</Text>
      <TextInput
        multiline
        style={styles.textInput}
        placeholder="type new message"
        onChangeText={(newText) => setNewMessage(newText)}
      />
      <Button title="send" onPress={handlePress} />
      <Text>response: </Text>
      <View style={styles.menuButtonContainer}>
        {/* <Button title="Enter App" onPress={() => navigation.navigate("Menu")} /> */}
      </View>
    </View>
  );
};

export default HomeScreen;
