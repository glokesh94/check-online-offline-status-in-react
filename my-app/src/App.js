import React from "react";
import NetworkStatus from "./components/networkStatus";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Internet Status</h1>

      <a
        class="button"
        href="https://www.youtube.com/channel/UC33JiQ6BDUqijK9XDzcM_hA?sub_confirmation=1"
        >Youtube Channel</a
      >

      <a class="button" href="https://www.youtube.com/watch?v=v9d7Qh-SUmQ"
        >How to detect network connection is Online/Offline Status Using React</a
      >

      <ToastContainer autoClose={3000} hideProgressBar />
      <NetworkStatus/>
    </div>
  );
};

export default App;