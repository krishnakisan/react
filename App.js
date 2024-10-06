import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement("h1",{id:"header"},"I am h1 tag");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);