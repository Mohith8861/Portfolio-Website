/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <div className="bg-[url('../public/pexels-bri-schneiter-28802-346529.jpg')] bg-scroll bg-cover bg-top bg-no-repeat text-colorGreyLight">
      <div className="bg-[#1e293ba9]">
        <div className="p-[5rem]">
          <div className="mx-auto mb-8 w-[18rem] h-[20rem] rounded-full overflow-hidden">
            <img src="mypic.jpg" className="w-full h-full" alt="" />
          </div>
          <div className="w-[80%] mx-auto">
            <p className="text-[1.5rem]">
              Welcome to my corner of the web! I'm Mohith, a passionate and
              dedicated developer with a knack for turning ideas into reality
              through code. My journey into the world of software development
              began since my entry into college. Since then, I've been on a
              relentless quest for learning and improvement, constantly honing
              my skills in Problem Solving, Web Development and Machine
              Learning. What sets me apart is my commitment to not just writing
              code, but crafting solutions that solve real-world problems and
              deliver tangible results. I thrive in collaborative environments
              where I can brainstorm ideas, iterate on designs, and ultimately
              build products that make a difference. I approach every project
              with enthusiasm and a drive to exceed expectations. Outside of
              coding, you'll often find me reading books, watching web series,
              listening music, etc as I believe in maintaining a healthy
              work-life balance to fuel creativity and productivity. Feel free
              to explore my portfolio to see some of the projects I've worked
              on. If you have a project in mind or just want to connect, don't
              hesitate to reach out—I'm always eager to collaborate and tackle
              new challenges! Thank you for stopping by.
            </p>
          </div>
          <div className="w-full text-end">
            <p className="text-[2rem] font-parisienne hover:text-[2.5rem] transition-all duration-500">
              Mohith
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
