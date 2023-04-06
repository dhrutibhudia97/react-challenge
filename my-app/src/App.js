// import css from "./App.module.css";
import "./App.css";
// import NavBarSimple from "./components/NavBarSimple";

import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm";
import Content from "./components/Content";
// import LifeCyclesCDM from "./components/LifeCyclesCDM";
// import LifeCyclesCDU from "./components/LifeCyclesCDU";
// import LifeCyclesCWU from "./components/LifeCyclesCWU";
// import ControlledForm from "./components/ControlledForm";
// import UncontrolledForm from "./components/UncontrolledForm";
import { SearchBar3 } from "./components/SearchBar3";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {<NavBarForm />
      <Sidebar />
      <Content />
      {/* LifeCyclesCDM /> */}
      {/* <LifeCyclesCDU /> */}
      {/* <LifeCyclesCWU /> */}
      {/* <ControlledForm /> */}
      {/* <UncontrolledForm /> */}
      {/* <SearchBar3 /> */}
    
    </div>
  );
}

export default App;