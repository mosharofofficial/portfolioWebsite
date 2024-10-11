// import profile from "./assets/img/profile.JPG";

function App() {
  return (
    <div className="text-white bg-black">
      <div className="min-h-[60vh] p-5 flex items-center justify-center ">
          <img
            src="https://i.ibb.co.com/JvNYT1P/BT-6576.jpg"
            className="w-[300px] h-[400px] object-cover object-top"
          />
        <div className=" flex flex-col justify-start items-start">

          <h1 className="text-7xl font-anton px-3 pb-2 mb-2 border-b-2">
            <span className="drop-shadow-[6px_4px_0px_#ffd700] hover:text-accent hover:drop-shadow-[6px_4px_0px_#fff] transition-all hover:transition-all duration-[300ms] hover:duration-[300ms]">
              MOSHAROF HOSSAIN
            </span>
          </h1>
          <h2 className="text-4xl pl-4">Web developer</h2>
          <p className="max-w-[550px] pl-4 mt-6">
            Passionate Web Developer with a strong foundation in modern web development technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
