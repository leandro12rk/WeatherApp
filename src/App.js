import React from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <div className="App">
        <div className="body-container">
          {/* <NavBar/> */}
          <Home />
        </div>
      </div>
    </SearchProvider>
  );
}

export default App;
