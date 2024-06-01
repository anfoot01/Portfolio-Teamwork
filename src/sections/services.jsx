import UIUXIcon from  "../styles/shared/icons/UIUXIcon";
import SoundIcon from "../styles/shared/icons/SoundIcon";
import GameIcon from "../styles/shared/icons/GameIcon";
import PhotographyIcon from  "../styles/shared/icons/PhotographyIcon";
import ChevronIcon from "../styles/shared/icons/ChevronIcon";
import DevelopmentIcon from "../styles/shared/icons/DevelopmentIcon";


function Services() {
  return (
    <section className="services" id="services">
      <h2 className="services__title">My Services</h2>
      <p className="services__desc">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <div className="services__group">
        <div className="services__block">
          <DevelopmentIcon /> 
          <h3 className="services__block-title">Web Development</h3>
          <p className="services__block-desc">Blog, E-Commerce</p>
        </div>

        <div className="services__block">
          <UIUXIcon /> 
          <h3 className="services__block-title">UI/UX Design</h3>
          <p className="services__block-desc">Mobile App, Website Design</p>
        </div>

        <div className="services__block">
           <SoundIcon /> 
          <h3 className="services__block-title">Sound Design</h3>
          <p className="services__block-desc">Voice Over, Beat Making</p>
        </div>

        <div className="services__block">
          <GameIcon /> 
          <h3 className="services__block-title">Game Design</h3>
          <p className="services__block-desc">
            Character Design, Props & Objects
          </p>
        </div>

        <div className="services__block">
          <PhotographyIcon /> 
          <h3 className="services__block-title">Photography</h3>
          <p className="services__block-desc">Portrait, Product Photography</p>
        </div>

        <div className="services__block">
          <h3 className="services__block-title last-title">Advertising</h3>
          <p className="services__block-desc last-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna viverra morbi.{" "}
          </p>
          <a href="/" className="services__block-btn">
             ORDER NOW <ChevronIcon /> 
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
