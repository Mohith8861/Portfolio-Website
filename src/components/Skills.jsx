export default function Skills() {
  const skill = [
    {
      name: "Python",
      img: "../public/python.png",
      desc: "General programming and problem solving, can also build Machine Learning models.",
    },
    {
      name: "Java",
      img: "../public/java-logo-1.png",
      desc: "General programming and problem solving, can do Backend Development",
    },
    {
      name: "JavaScript",
      img: "../public/javascript.png",
      desc: "General programming and problem solving, can do Frontend and Backend Development",
    },
    {
      name: "NodeJs",
      img: "../public/nodejs.png",
      desc: "Backend Development using Express and Mongoose libraries",
    },
    {
      name: "ReactJS",
      img: "../public/react.png",
      desc: "Intermediate level projects and optimized web appliications",
    },
    {
      name: "Spring",
      img: "../public/spring-logo.png",
      desc: "Intermediate level projects and optimized web appliications",
    },
  ];
  return (
    <div className="w-full bg-[#525252] clipHome2 p-[8rem] mx-auto grid grid-cols-3  gap-y-6">
      {skill.map((e) => {
        return (
          <div
            key={e.img}
            className="w-[80%] mx-auto bg-[#ffffff00] rounded-md px-8 py-4 flex flex-col gap-4 items-center">
            <div className="w-[50%] h-full my-auto">
              <div className="h-full w-full overflow-hidden bg-colorGreyLight rounded-full hover:border-4">
                <img src={e.img} width={"100%"} height={"100%"} alt="" />
              </div>
            </div>

            <div className="w-[80%] text-colorGreyLight text-center py-4">
              <p className="text-2xl">{e.name}</p>
              <p>{e.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
