
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__info">
        <h1 className="hero__title">
          I’m Rayan Adlrdard <span>Front-end</span> Developer 
        </h1>
        <p className="hero__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
        </p>
        <button className="hero__btn">
          HIRE ME
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.78117 5.33312L5.20517 1.75712L6.14784 0.814453L11.3332 5.99979L6.14784 11.1851L5.20517 10.2425L8.78117 6.66645H0.666504V5.33312H8.78117Z" fill="#2B2B2B" />
          </svg>
        </button>
        <div className="circle-yellow-top">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="7" stroke="#FFB400" stroke-opacity="0.8" strokeWidth="2" />
          </svg>
        </div>
        <div className="square-blue-bottom">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="14" height="14" stroke="#0047ff" stroke-opacity="0.8" strokeWidth="2"/>
          </svg>
        </div>
        <div className="circle-green-bottom">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="7" stroke="#05FF00" stroke-opacity="0.8" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="hero__image">
        <img src="/src/assets/img/hero.png" alt="hero" />
        <div className="circle-green-top">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="7" stroke="#05FF00" stroke-opacity="0.8" strokeWidth="2" />
          </svg>
        </div>
        <div className="square-yellow-top">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="14" height="14" stroke="#ffb400" stroke-opacity="0.8" strokeWidth="2"/>
          </svg>
        </div>
        <div className="triangle-red-bottom">
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.80385 11L7 2L12.1962 11H1.80385Z" stroke="#FF2E00" stroke-opacity="0.8" strokeWidth="2" />
          </svg>
        </div>
        <div className="circle-yellow-bottom">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8.86133" cy="8.96387" r="7" stroke="#FFB400" stroke-opacity="0.8" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;  