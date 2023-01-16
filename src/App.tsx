import { useSelector } from "react-redux/es/exports";
import "./App.css";
import { RootState } from "./store";

function App() {
  const data = useSelector((state: RootState) => state.counter.data);
  console.log("🚀 ~ file: App.tsx:7 ~ App ~ count", data)
  return <div className="App"></div>;
}

export default App;
