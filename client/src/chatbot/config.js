import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "HAND2HAND Bot",

  initialMessages: [
    createChatBotMessage(
      "Hi 👋 I'm the HAND2HAND assistant. I help users negotiate prices with sellers."
    ),
  ],

  customStyles: {
    botMessageBox: {
      backgroundColor: "#2563eb",
    },
    chatButton: {
      backgroundColor: "#2563eb",
    },
  },
};

export default config;