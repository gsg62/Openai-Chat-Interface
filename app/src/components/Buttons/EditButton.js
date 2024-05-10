import { TouchableOpacity } from "react-native"
import { AntDesign } from "@expo/vector-icons"

const EditButton = ({ setModalVisible, setSelectedJoke, jokeToSelect }) => {
  handlePress = () => {
    setSelectedJoke(jokeToSelect)
    setModalVisible(true)
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <AntDesign name="edit" size={24} color="black" />
    </TouchableOpacity>
  )
}

export default EditButton
