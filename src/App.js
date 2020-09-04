import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      {/* creating Header */}
      <Header/>
      {/* creating Main */}
      <Main/>
      {/* creating Footer */}
      <Footer/>
    </div>
  );
}

export default App;
