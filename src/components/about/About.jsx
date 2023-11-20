import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="wrapper">
        <h2>Skills</h2>
        <div className="cards">
          <div className="card">
            <div className="imgBox">
              <img src="success1.webp" alt="skills1" />
            </div>
            <div className="details">
              <h4>Skill Title</h4>
              <p>
                Dynamic, sociable, easy adaptable to working conditions, the
                ability to work on weekends and over the program, learn new
                things and easily create new professional skills.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="imgBox">
              <img src="success2.webp" alt="skills2" />
            </div>
            <div className="details">
            <h4>Skill Title</h4>
              <p>
                Working with information, organization, analysis and synthesis,
                conflict resolution, argumentation, presentation,
                self-mobilization, effective communication.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="imgBox">
              <img src="success3.webp" alt="skills3" />
            </div>
            <div className="details">
            <h4>Skill Title</h4>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>ReactJS</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button>See my works</button>
          <button className="resume">See my resume</button>
        </div>
      </div>
    </div>
  );
};

export default About;
