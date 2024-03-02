const WorksItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="work__buttons-container">
        <a href={item.linkToDemo} target="blank" className="work__button-demo">
          Demo <i className="bx bx-right-arrow-alt work__button-demo-icon"></i>
        </a>
        <a href={item.linkToGit} target="blank" className="work__button-github">
          Github Code
          <i className="bx bx-right-arrow-alt work__button-github-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default WorksItems;
