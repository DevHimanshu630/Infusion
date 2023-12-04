import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import OtherScreen from "./components/OtherScreen";
function App() {
  return (
    <>
      <div>
          <Navbar/>
          <Main/>
      </div>
      <OtherScreen/>
    </>
  );
}

export default App;
