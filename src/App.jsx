// import profile from "./assets/img/profile.JPG";

import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="text-white bg-black min-h-screen 
    ">
      <div className="w-90vw max-w-[1280px] mx-auto">

      <Header></Header>
      <Skills></Skills>
      <Projects></Projects>
      </div>
    </div>
  );
}

export default App;
