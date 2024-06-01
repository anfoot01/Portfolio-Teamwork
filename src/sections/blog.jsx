import { Arrow } from "../../public/blog/Arrow";

function Blog() {

  return (
    <div className="blog" id="blog">
      <div className="blog__title">Blog</div>
      <div className="blog__desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</div>
      <div className="blog__items">
        <div className="blog__item">
            <div className="blog__item__img"><img src="./public/blog/blog-1.jpg" alt="Blog-1" /></div>
          <div className="blog__item__text">
          <div className="blog__item__text__title">How to make web tempates</div>
          <div className="blog__item__text__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna </div>
          <a href="#" className="blog__item__text__link">Learn more <Arrow /></a>
          </div>
        </div>
        <div className="blog__item">
            <div className="blog__item__img"><img src="./public/blog/blog-2.jpg" alt="Blog-2" /></div>
          <div className="blog__item__text">
          <div className="blog__item__text__title">make Business card</div>
          <div className="blog__item__text__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna </div>
          <a href="#" className="blog__item__text__link">Learn more <Arrow /></a>
          </div>
        </div>
        <div className="blog__item">
            <div className="blog__item__img"><img src="./public/blog/blog-3.jpg" alt="Blog-3" /></div>
          <div className="blog__item__text">
          <div className="blog__item__text__title">How to make Flyer Design</div>
          <div className="blog__item__text__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna </div>
          <a href="#" className="blog__item__text__link">Learn more <Arrow /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;