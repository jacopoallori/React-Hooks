import React from "react";
import SideBarApp from "./sideBarApp";
import './sideBar.css'
import { AppProvider } from "./context";

const IndexSideBar = () => {
  return <>
    <AppProvider>
      <SideBarApp/>
    </AppProvider>
  </>;
};

export default IndexSideBar;

 