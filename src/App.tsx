import { useSelector } from "react-redux/es/exports";
import "./App.css";
import { RootState } from "./store";
import HeaderController from "./header";
import List from "./list";
import Loading from "./components/loading/loading";

function App() {
  const loading = useSelector((state: RootState) => state.youtube.loading);
  return (
    <div className="App">
      <HeaderController />
      {loading ? <Loading isMain={true} /> : <List />}
    </div>
  );
}

export default App;
