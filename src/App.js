// import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrayMap from "./Components/CodeStepByStep/ArrayMap";
import TittleUpdater from "./Components/CodeStepByStep/TittleUpdater";
import Hook1 from "./Components/Hooks/Hook1";
import Hook2 from "./Components/Hooks/Hook2";
import Hook3 from "./Components/Hooks/Hook3";
// import InputFeildValue from "./Components/stateparent/InputFeildValue";
// import AuthProvider from "./Components/RouterTopic/Auth";
// import ParentRouter from "./Components/RouterTopic/ParentRouter";
// import ParentPizza from "./pizzaparent/ParentPizza";
// import StateParent from "./Components/stateparent/StateParent";
import ComponentStyle from "./Components/stateparent/ComponentStyle";
import Booting from "./Components/Hooks/Booting";
// import ApiCalling from "./Components/Hooks/ApiCalling";
import CheckData from "./Components/Hooks/CheckData";
import ToDoList from "./Components/Hooks/ToDoList";

function App() {
  return ( 
    <> 
    {/* <ToDoList /> */}
    <Booting />
    <CheckData />
    {/* <ApiCalling /> */}
    <Hook1 />
    <Hook2 />
    <Hook3 />
    <TittleUpdater />
    <ArrayMap />
    <ComponentStyle />
    {/* <InputFeildValue />   */}
    {/* <AuthProvider> */}
    
    {/* <ParentRouter /> */}
  {/* <ParentPizza /> */} 
  {/* <StateParent /> */}
  {/* </AuthProvider> */}

  </> 
) 
} 

export default App; 
