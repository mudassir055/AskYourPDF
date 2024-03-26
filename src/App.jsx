import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex justify-start min-h-full w-full">
      <Sidebar />
      <div className="flex flex-col w-full">
        <div>
          <Header />
          <div className="bg-gray-100 flex p-2 justify-center items-center">
            <p>
              Ask me about Chapter 1 (1).pdf. <span>View Doc</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full h-full">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
