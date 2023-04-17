import IndexSideBar from "./8-SideBar/indexSidebar";
import { AppProvider } from "./8-SideBar/context";
import AppCart from "./9-Cart/appCart";

function App() {
  return (
    <div className="App">
      <AppProvider>
          <AppCart/>
      </AppProvider>
    </div>
  );
}

export default App;
