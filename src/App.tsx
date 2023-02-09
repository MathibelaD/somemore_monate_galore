import React from "react";
import { Footer } from "./components/FooterComponent/Footer";
import { NavBar } from "./components/NavBarComponent/NavBar";
import { SubHeading } from "./components/SubHeadingComponent/SubHeading";

const App = () => {
    return (
        <div>
            <NavBar />
            <SubHeading />
            <Footer />
        </div>
    )
}

export default App;
