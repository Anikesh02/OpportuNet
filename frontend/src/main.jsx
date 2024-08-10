import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { PlayProvider } from "./contexts/Play.jsx";
import "./index.css";
import store from "./store/store.js";

// In the video call scenario, set mode to "rtc"
const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <AgoraRTCProvider client={client}>
    <Provider store={store}>
    <PlayProvider>
      <App />
    </PlayProvider>

    </Provider>
    </AgoraRTCProvider>
  </BrowserRouter>
);
