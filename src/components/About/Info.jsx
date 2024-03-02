const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-current-location"></i>
        <h3 className="about__title">Kizhakkambalam, Ernakulam</h3>
        <span className="about__subtitle">Kerala, India</span>
      </div>
      <div className="about__box">
        <i className="bx bx-time-five"></i>
        <h3 className="about__title"> Exploring Docs, Gaming</h3>
        <span className="about__subtitle">my hobbies</span>
      </div>
      {/* <div className="about__box">
        <i className="bx bx-briefcase-alt about-icon"></i>
        <h3 className="about__title">Data Analyst Intern</h3>
        <span className="about__subtitle">2023 - 2024</span>
      </div> */}
    </div>
  );
};

export default Info;
