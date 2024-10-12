// import profile from "./assets/img/profile.JPG";


import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import WhyHireMe from "./components/WhyHireMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className={`allWrapper text-white  min-h-screen bg-[#00000080]`}
    >
      <div className="w-90vw max-w-[1280px] mx-auto ">
        <Header></Header>
        <div className=" my-[100px] flex flex-col items-center justify-center p-10 border-x-[4px] border-white">
          <h2 className="text-3xl border-b-2 border-white pb-4 mb-[40px] px-10 ">
            About me
          </h2>
          <p className="text-xl max-w-[1024px] ">
            I am a passionate junior web developer with expertise in HTML, CSS,
            JavaScript, and React. With hands-on experience in both front-end
            and back-end technologies like Express.js, MongoDB, and Firebase, I
            enjoy building responsive, user-friendly web applications. I am
            constantly learning new tools and improving my skills to create
            innovative solutions. In addition to web development, I have
            contributed to various college projects and volunteered to support
            student activities. My goal is to continue growing as a full-stack
            developer while contributing to meaningful projects.
          </p>
        </div>
        <Skills></Skills>
        <Projects></Projects>
        <WhyHireMe></WhyHireMe>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
