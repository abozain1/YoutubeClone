import { useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import "./App.css";
import { RootState } from "./store";
import axios from "axios";
import { fetchData } from "./store/storeActions";
import Header from "./header/header";
import List from "./list";
import Loading from "./components/loading/loading";

function App() {
  const loading = useSelector((state: RootState) => state.youtube.loading);
  return (
    <div className="App">
      <Header />
      {loading ? <Loading /> : <List />}
    </div>
  );
}

export default App;
