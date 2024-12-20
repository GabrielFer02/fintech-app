import React from "react";
import "./Main.css";
import Header from "./Components/Header";
import SideNav from "./Components/SideNav";
import Resume from "./Pages/Resume";
import { DataContextProvider } from "./Context/DataContext";
import Sales from "./Pages/Sales";

const App = () => {
  return (
    <DataContextProvider>
      <div className="container">
        <SideNav />
        <main>
          <Header />
          <Resume />
          <Sales />
        </main>
      </div>
    </DataContextProvider>
  );
};
export default App;
