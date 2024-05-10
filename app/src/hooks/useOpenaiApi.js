import { useCallback, useState, useEffect } from "react";
import { openaiApi } from "../api/testApi";

export const useOpenaiApi = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (messages.length) {
      const lastMessageSource = messages[messages.length - 1].role;
      console.log("lastMessageSource:", lastMessageSource);
      if (lastMessageSource == "user") {
        console.log("call api");
        sendMessage();
      }
    }
  }, [messages]);

  const sendMessage = useCallback(async () => {
    setLoading(true);
    const body = { messages: messages };
    try {
      console.log("api call made");
      openaiApi.post("/chat", body).then((response) => {
        const messageFromApi = response.data.body.choices[0].message;
        console.log("response from api: ", messageFromApi);
        setMessages([...messages, messageFromApi]);
        setLoading(false);
      });
    } catch (error) {
      console.log("error caught");
      console.error(error);
      setLoading(false);
      throw error;
    }
  }, [messages]);

  const testEndpoint = useCallback(async () => {
    try {
      openaiApi.get("/test").then((response) => {
        console.log("response:", response.data);
      });
    } catch (error) {
      console.log("error caught");
      console.error(error);
      throw error;
    }
  }, []);
  return { loading, messages, setMessages, sendMessage, testEndpoint };
};
