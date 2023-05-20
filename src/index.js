import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";

function init() {
	const root = createRoot(document.getElementById("root"));
	root.render(<App />);
}

init();
