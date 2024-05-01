/* eslint-disable no-unused-vars */
import Header from "./components/Header";
import Page from "./Page";
import Skills from "./components/Skills";
import About from "./About";
import Projects from "./Projects";
// text - [#efc9af]
// bg-[#111842]

function App() {
  return (
    <>
      <div className="min-h-[100vh]  text-colorTextB w-full selection:text-colorGreyLight selection:bg-colorSelectLight">
        <div className="bg-[url('../public/denys-nevozhai-duo-xV0TU7s-unsplash.jpg')] bg-scroll bg-cover bg-top bg-no-repeat clipHome">
          <div className="min-h-[100vh] bg-gradient-to-r from-colorbg1 to-colorbg2">
            <Header />
            <Page />
          </div>
        </div>
        <Projects />

        <div className="">
          <Skills />
        </div>
        <About />
      </div>
    </>
  );
}

export default App;
