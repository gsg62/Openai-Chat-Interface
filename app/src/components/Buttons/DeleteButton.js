import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useToast } from "react-native-toast-notifications";

const DeleteButton = ({ id }) => {
  const { deleteJoke } = useLocalStorage();
  const toast = useToast();

  const handleDelete = (id) => {
    const result = deleteJoke(id);
    if (result == "success") {
      toast.show("joke deleted", { type: "success" });
    } else {
      console.error(result);
      toast.show("Error adding joke", { type: "danger" });
    }
  };

  return (
    <TouchableOpacity onPress={() => handleDelete(id)}>
      <AntDesign name="delete" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default DeleteButton;
