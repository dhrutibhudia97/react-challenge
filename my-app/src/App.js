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
import ControlledFormHooks from "./components/ControlledFormHooks";
import UseStateWithArrays from "./components/UseStateWithArrays";
import UseStateWithObjects from "./components/UseStateWithObjects";
import UseEffectCounter from "./components/UseEffectCounter";
import UseEffectCounterContainer from "./components/UseEffectCounterContainer";
import ContentHooks from "./components/ContentHooks";
import HTTPRequests from "./components/HTTPRequests";
import HTTPPost from "./components/HTTPPost";
import HTTPHooks from "./components/HTTPHooks";



function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* {<NavBarForm />
      <Sidebar />
      <Content /> */}
      {/* LifeCyclesCDM /> */}
      {/* <LifeCyclesCDU /> */}
      {/* <LifeCyclesCWU /> */}
      {/* <ControlledForm /> */}
      {/* <UncontrolledForm /> */}
      {/* <SearchBar3 /> */}
      {/* <ControlledFormHooks />
      <UseStateWithArrays />  */}
      {/* <UseStateWithObjects /> */}
      {/* <UseEffectCounter/> */}
      {/* <UseEffectCounterContainer /> */}
      {/* <ContentHooks /> */}
      {/* <HTTPRequests /> */}
      {/* <HTTPPost /> */}
      <HTTPHooks />

    </div>
  );
}

export default App;