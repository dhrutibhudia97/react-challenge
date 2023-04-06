// import css from "./App.module.css";
import "./App.css";
// import NavBarSimple from "./components/NavBarSimple";

// import Sidebar from "./components/Sidebar";
// import NavBarForm from "./components/NavBarForm";
// import Content from "./components/Content";
// import LifeCyclesCDM from "./components/LifeCyclesCDM";
// import LifeCyclesCDU from "./components/LifeCyclesCDU";
import LifeCyclesCWU from "./components/LifeCyclesCWU";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* <NavBarForm />
      <Sidebar />
      <Content />
      <LifeCyclesCDM /> */}
      {/* <LifeCyclesCDU /> */}
      <LifeCyclesCWU />

    </div>
  );
}

export default App;