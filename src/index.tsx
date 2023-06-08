import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {requiresServiceWorker} from "@theolive/player/chromeless";
import "./index.css";

if (requiresServiceWorker()) {
    navigator.serviceWorker
        .register("THEOLive.sw.js")
        .then(function (registration) {
            console.log(
                "Registration successful, scope is:",
                registration.scope
            );
        })
        .catch(function (error) {
            console.log("Service worker registration failed, error:", error);
        });
}

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
