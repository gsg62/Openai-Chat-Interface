import { useRealm } from "@realm/react";

export const useLocalStorage = () => {
  const realm = useRealm();

  const addJoke = (joke) => {
    return realm.write(() => {
      newJoke = {
        _id: joke.id,
        value: joke.value,
      };
      return realm.create("Joke", newJoke);
    });
  };

  const updateJoke = (id, updatedJoke) => {
    const joke = realm.objectForPrimaryKey("Joke", id);
    if (joke) {
      realm.write(() => {
        Object.keys(updatedJoke).forEach((key) => {
          joke[key] = updatedJoke[key];
        });
      });
    }
  };

  const deleteJoke = (id) => {
    const joke = realm.objectForPrimaryKey("Joke", id);
    if (joke) {
      return realm.write(() => {
        realm.delete(joke);
        return "success";
      });
    } else {
      return "joke not found";
    }
  };

  return { addJoke, updateJoke, deleteJoke };
};
