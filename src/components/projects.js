import "../styles/projects.css";
import Project from "./project";

function Projects() {
  const data = [
    {
      image: "kennythaitea/hackgpt.png",
      alttag: "hackGPT",
      projectName: "hackGPT",
      link: "https://github.com/kennythai2003/hackathon/tree/main/hackGPT",
    },
    {
      image: "kennythaitea/pomodiscordo.png",
      alttag: "Pomodiscordo",
      projectName: "Pomodiscordo",
      link: "https://github.com/kennythai2003/PomoDiscordo_Bot",
    },
    {
      image: "kennythaitea/planit.png",
      alttag: "PlanIt",
      projectName: "PlanIt",
      link: "https://github.com/kennythai2003/PlanIt",
    },
  ];
  return (
    <section id="projects">
      <p className="small_text">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-flexboxes_content">
        <div className="flexbox_containers">
          {data.map((value) => (
            <Project
              image={value.image}
              alttag={value.alttag}
              projectName={value.projectName}
              link={value.link}
            />
          ))}
        </div>
      </div>
      <img
        src="kennythaitea/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onclick="location.href='./#contact'"
      />
    </section>
  );
}

export default Projects;
