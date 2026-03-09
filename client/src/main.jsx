import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { Toaster } from "./components/ui/toaster.jsx";

// Render React app
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </BrowserRouter>
);

// Load Chatbot AFTER page loads
window.addEventListener("load", () => {
  window.embeddedChatbotConfig = {
    chatbotId: "UFEUevQYIA9jC9bRYMp7R",
    domain: "www.chatbase.co"
  };

  const script = document.createElement("script");
  script.src = "https://www.chatbase.co/embed.min.js";
  script.defer = true;
  document.body.appendChild(script);
});