export default function Skills() {
  const skill = [
    {
      name: "Python",
      img: "/python.png",
      desc: "General programming and problem solving, can also build Machine Learning models.",
    },
    {
      name: "Java",
      img: "/java-logo-1.png",
      desc: "General programming and problem solving, can do Backend Development",
    },
    {
      name: "JavaScript",
      img: "/javascript.png",
      desc: "General programming and problem solving, can do Frontend and Backend Development",
    },
    {
      name: "NodeJs",
      img: "/nodejs.png",
      desc: "Backend Development using Express and Mongoose libraries",
    },
    {
      name: "ReactJS",
      img: "/react.png",
      desc: "Intermediate level projects and optimized web appliications",
    },
    {
      name: "Spring",
      img: "/spring-logo.png",
      desc: "Intermediate level projects and optimized web appliications",
    },
    {
      name: "C++",
      img: "/cpp.png",
      desc: "Begginer Still learning",
    },
  ];
  return (
    <>
      <div className="p-[5rem] text-4xl w-full text-center">
        <p className="mt-[-6rem] text-colorTextB">Skills</p>
      </div>
      <div className="w-full bg-[#525252] skillBg selection:text-colorTextB clipHome2 p-[8rem] mx-auto grid grid-cols-3 mt-[-10rem] gap-y-4">
        {skill.map((e) => {
          return (
            <div
              key={e.img}
              className="w-full h-full mx-auto rounded-md px-8 py-4 flex flex-col gap-4 justify-between items-center">
              <div className="w-[50%] 2xl:w-[30%] h-[50%] my-auto">
                <div className="overflow-hidden bg-colorGreyLight rounded-full hover:border-4">
                  <img
                    src={e.img}
                    className="object-cover"
                    width={"100%"}
                    height={"100%"}
                    alt=""
                  />
                </div>
              </div>

              <div className="w-[80%] h-[50%] text-colorGreyLight text-center py-4">
                <p className="text-2xl">{e.name}</p>
                <p className="text-xl">{e.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
