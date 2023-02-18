import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import House from "./components/house.jsx";
import Info from "./components/info.jsx";

function App() {
    return ( <
        Router >
        <
        Routes >
        <
        Route path = "/"
        element = { < House / > }
        /> <
        Route path = "/info/:id"
        element = { < Info / > }
        /> <
        /Routes> <
        /Router>
    );
}

export default App;