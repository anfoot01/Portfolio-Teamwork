function Portfolio() {

    return (
      <section className="portfolio" id="portfolio">
        <h1 className="portfolio__title title">Portfolio</h1>
        <p className="portfolio__desc desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
        <ul className="portfolio__categories">
          <li className="portfolio__category">All</li>
          <li className="portfolio__category">UI Design</li>
          <li className="portfolio__category">Web Templates</li>
          <li className="portfolio__category">Logo</li>
          <li className="portfolio__category">Branding</li>
        </ul>
        <div className="portfolio__items">
          <div className="portfolio__item">
            <img src="/src/assets/img/portfolio/Laptop.png" alt="" />
            <div className="portfolio__item__hover-plus">+</div>
          </div>
          <div className="portfolio__item">
            <img src="/src/assets/img/portfolio/UIDesigner.png" alt="" />
            <div className="portfolio__item__hover-plus">+</div>
          </div>
          <div className="portfolio__item">
            <img src="/src/assets/img/portfolio/Agency.png" alt="" />
            <div className="portfolio__item__hover-plus">+</div>
          </div>
          <div className="portfolio__item">
            <img src="/src/assets/img/portfolio/Restaurant.png" alt="" />
            <div className="portfolio__item__hover-plus">+</div>
          </div>
          <div className="portfolio__item">
            <img src="/src/assets/img/portfolio/Folder.png" alt="" />
            <div className="portfolio__item__hover-plus">+</div>
          </div>
          <div className="portfolio__item">
            <img src="/src/assets/img/portfolio/GraphicDesigner.png" alt="" />
            <div className="portfolio__item__hover-plus">+</div>
          </div>
          <div className="portfolio__item">
            <img src="/src/assets/img/portfolio/Mockup.png" alt="" />
            <div className="portfolio__item__hover-plus">+</div>
          </div>
          <div className="portfolio__item">
            <img src="/src/assets/img/portfolio/Business.png" alt="" />
            <div className="portfolio__item__hover-plus">+</div>
          </div>
          <div className="portfolio__item">
            <img src="/src/assets/img/portfolio/BritishAgency.png" alt="" />
            <div className="portfolio__item__hover-plus">+</div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Portfolio;