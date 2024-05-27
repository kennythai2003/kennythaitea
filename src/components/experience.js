import "../styles/experience.css";
import Language from "./Language";

function Experience() {
  const data = [
    {
      image: "kennythaitea/python.png",
      alttag: "python icon",
      language: "Python",
      category: "Programming",
    },
    {
      image: "kennythaitea/cpp.png",
      alttag: "cpp icon",
      language: "C++",
      category: "Programming",
    },
    {
      image: "kennythaitea/git.png",
      alttag: "git icon",
      language: "Git",
      category: "Version Control",
    },
    {
      image: "kennythaitea/html.png",
      alttag: "html icon",
      language: "HTML",
      category: "Frontend",
    },
    {
      image: "kennythaitea/css.png",
      alttag: "css icon",
      language: "CSS",
      category: "Frontend",
    },
    {
      image: "kennythaitea/javascript.png",
      alttag: "javascript icon",
      language: "JavaScript",
      category: "Frontend",
    },
    {
      image: "kennythaitea/react.png",
      alttag: "react icon",
      language: "React",
      category: "Framework",
    },
    {
      image: "kennythaitea/bootstrap.png",
      alttag: "bootstrap icon",
      language: "Bootstrap",
      category: "Framework",
    },
    {
      image: "kennythaitea/nodejs.png",
      alttag: "nodejs icon",
      language: "Node.js",
      category: "Backend",
    },
    {
      image: "kennythaitea/Express.png",
      alttag: "express icon",
      language: "Express",
      category: "Framework",
    },
    {
      image: "kennythaitea/mongodb.png",
      alttag: "mongodb icon",
      language: "mongoDB",
      category: "Databases",
    },
    {
      image: "kennythaitea/postgresql.png",
      alttag: "postgresql icon",
      language: "PostgreSQL",
      category: "Databases",
    },
    {
      image: "kennythaitea/docker.png",
      alttag: "docker icon",
      language: "Docker",
      category: "Virtualization",
    },
  ];

  const coursework = [
    {
      image: "kennythaitea/dsa.png",
      language: "Data Structures and Algorithms",
    },
    { image: "kennythaitea/webdev.png", language: "Web Development" },
    { image: "kennythaitea/ai.png", language: "Artificial Intelligence" },
    { image: "kennythaitea/ml.png", language: "Machine Learning" },
    { image: "kennythaitea/embedded.png", language: "Embedded Systems" },
    { image: "kennythaitea/compiler.png", language: "Compiler Design" },
    { image: "kennythaitea/comparch.png", language: "Computer Architecture" },
    { image: "kennythaitea/os.png", language: "Operating Systems" },
    { image: "kennythaitea/logic.png", language: "Logic Design" },
    { image: "kennythaitea/sc.png", language: "Software Construction" },
    { image: "kennythaitea/discrete.png", language: "Discrete Math" },
  ];

  return (
    <section id="experience" className="resume_sec">
      <p className="small_text">Explore My</p>
      <h1 className="title">Technical Skills</h1>
      <div className="experience-flexboxes_content">
        <div className="flexbox_containers">
          <div className="flexboxes_content hidden">
            <h2 className="experience-sub-title">Languages and Tools</h2>
            <div className="article-container">
              {data.map((value) => (
                <Language
                  image={value.image}
                  alttag={value.alttag}
                  language={value.language}
                  category={value.category}
                />
              ))}
            </div>
          </div>
          <div className="flexboxes_content hidden">
            <h2 className="experience-sub-title">Relevant Coursework</h2>
            <div className="article-container">
              {coursework.map((value) => (
                <Language image={value.image} language={value.language} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        src="kennythaitea//arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onclick="location.href='./#projects'"
      />
    </section>
  );
}

export default Experience;
