// import profile from "./assets/img/profile.JPG";

import Header from "./components/Header";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="text-white bg-black min-h-screen 
    ">
      <div className="w-90vw max-w-[1280px]">

      <Header></Header>
      <Skills></Skills>
      </div>
    </div>
  );
}

export default App;
