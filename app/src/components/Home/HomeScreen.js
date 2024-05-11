import { Button, Text, TextInput, View } from "react-native";
import { useState, useEffect } from "react";
import styles from "../../style/styles";
import { useOpenaiApi } from "../../hooks/useOpenaiApi";
import Messages from "../Messages/Messages";

const HomeScreen = () => {
  const [newMessage, setNewMessage] = useState();
  const { messages, setMessages, testEndpoint } = useOpenaiApi();

  const handlePress = () => {
    const userMessage = {
      role: "user",
      content: newMessage,
    };
    setMessages((prev) => [...prev, userMessage]);
    // sendMessage();
    // testEndpoint();
  };

  const handleTest = () => {
    console.log("messages: ", messages);
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
      <Messages messages={messages} />
      <View style={styles.menuButtonContainer}>
        <Button title="test button" onPress={handleTest} />
      </View>
    </View>
  );
};

export default HomeScreen;
