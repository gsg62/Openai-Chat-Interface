import { Text, View } from "react-native";
import styles from "../../style/styles";

const MessageDisplay = ({ message }) => {
  return (
    <View style={styles.messageContainer}>
      {message.role == "assistant" && <Text>Assistant: </Text>}
      {message.role == "user" && <Text>Me: </Text>}
      <Text>{message.content}</Text>
    </View>
  );
};

const Messages = ({ messages }) => {
  return (
    <View>
      {messages.map((message, index) => (
        <MessageDisplay message={message} key={index}/>
      ))}
    </View>
  );
};

export default Messages;
