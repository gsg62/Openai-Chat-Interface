import Realm from "realm"

class JokeModel extends Realm.Object {
  static schema = {
    name: "Joke",
    primaryKey: "_id",
    properties: {
      _id: "string",
      value: "string",
    },
  }
}

export default JokeModel
