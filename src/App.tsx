import { useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import "./App.css";
import { RootState } from "./store";
import axios from "axios";
import { fetchData } from "./store/storeActions";

function App() {
  const data = useSelector((state: RootState) => state.counter.data);
  useEffect(() => {
  // fetchData('spongebob')
  }, []);
  return <div className="App"></div>;
}

export default App;
