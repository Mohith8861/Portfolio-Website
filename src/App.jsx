/* eslint-disable no-unused-vars */
import Header from "./components/Header";
import Page from "./Page";
import Band from "./components/Band";
import About from "./About";
// text - [#efc9af]
// bg-[#111842]
function App() {
  return (
    <>
      <div className="min-h-[100vh] text-[#efc9af] w-full selection:text-[#111842] bg-[#111842] selection:bg-[#efc9af]">
        <div className="bg-[url('public/pexels-bri-schneiter-28802-346529.jpg')] bg-scroll bg-cover bg-top bg-no-repeat">
          <div className="min-h-[100vh] bg-[#111842b6]">
            <Header />
            <Page />
            {/* <Band /> */}
          </div>
        </div>
        <Band />
        <About />
      </div>
    </>
  );
}

export default App;
