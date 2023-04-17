import Modal from "./Modal";
import NavBar from "./NavBar"
import Sidebar from "./SideBar";
import { useGlobalContext } from "./context";

const SideBarApp = () => {
  const {isModalOpen, openModal} = useGlobalContext();
  return <div>
      <NavBar/>
      <Sidebar/>
      <Modal/>
      {
        !isModalOpen &&(
          <main className="modal-controller">
            <button className="btn btn-selector" onClick={openModal}>Apri Modal</button>
          </main>
        )
      }
  </div>;
}

export default SideBarApp;

