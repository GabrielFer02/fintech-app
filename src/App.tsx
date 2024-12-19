import React from "react";
import "./Main.css";
import Header from "./Components/Header";
import SideNav from "./Components/SideNav";
import Resume from "./Pages/Resume";
import { DataContextProvider } from "./Context/DataContext";

const App = () => {
  return (
      <DataContextProvider>
    <div>
        <SideNav />
        <main>
          <Header />
          <Resume />
        </main>
    </div>
      </DataContextProvider>
  );
};
export default App;
