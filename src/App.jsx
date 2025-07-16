/* eslint-disable no-unused-vars */
import Header from "./components/Header";
import Page from "./Page";
import Skills from "./components/Skills";
import About from "./About";
import Wall from "./Wall";
import Menu from "./Menu";
// text - [#efc9af]
// bg-[#111842]

function App() {
  return (
    <div className="min-h-[100vh] bg-[url('/public/marco-luzi-ozephPK8J7k-unsplash.jpg)] text-colorTextB w-full selection:text-colorGreyLight selection:bg-colorSelectLight font-lato">
      <div className="bg-[url('/snow-1868299_1920.jpg')] bg-scroll bg-cover bg-top bg-no-repeat clipHome z-10">
        <div className="min-h-[100vh] bg-gradient-to-r from-colorbg1 to-colorbg2">
          <Header />
          <Page />
        </div>
      </div>

      <Skills />
      <Wall />
      <About />
    </div>
  );
}

export default App;
