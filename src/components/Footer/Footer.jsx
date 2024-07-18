import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Eldhose K Paul</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About Me
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://github.com/ekpemcr7"
            className="footer__social-icon"
            target="blank"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/eldhosekpaul/"
            className="footer__social-icon"
            target="blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/eldhosekpaul"
            className="footer__social-icon"
            target="blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169;Shinobi_meow. All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
