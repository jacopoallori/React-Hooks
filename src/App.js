import IndexSideBar from "./8-SideBar/indexSidebar";
import { AppProvider } from "./8-SideBar/context";

function App() {
  return (
    <div className="App">
      <AppProvider>
          <IndexSideBar/>
      </AppProvider>
    </div>
  );
}

export default App;
