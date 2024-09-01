import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import DonutContainer from "./components/DonutContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DonutContainer/>
        <IceCreamContainer/>
        <HooksCakeContainer/>
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
 