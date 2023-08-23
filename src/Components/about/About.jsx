import "./about.css";
import Award from "../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <h1 className="a-sub">
          A dedicated Front-end Developer based in Lucknow, India 📍
        </h1>
        <p className="a-desc">
          As a Junior Front-End Developer, I possess an impressive arsenal of
          skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in
          designing and maintaining responsive websites that offer a smooth user
          experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
        <div className="a-award">
          <img src={Award} className="a-award-img" alt="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">CERTIFICATIONS ACHIVED</h4>
            <div className="a-award-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit veritatis tenetur, consectetur neque sint accusamus
              ea exercitationem deleniti quas itaque!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
