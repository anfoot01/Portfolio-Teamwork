function Footer() {

  return (
    <div className="footer">
      <div className="footer__logos">
        <a href="/"><img src="public/footer/petroleum.svg" alt="logo petroleum" /></a>
        <a href="/"><img src="public/footer/station.svg" alt="logo station" /></a>
        <a href="/"><img src="public/footer/garage.svg" alt="logo garage" /></a>
        <a href="/"><img src="public/footer/station2.svg" alt="logo station2" /></a>
      </div>

      <div className="footer__copyright">
        <p> &copy; {new Date().getFullYear()} All Rights Reserved.Ojjomedia </p>
      </div>
    </div>
  );
}

export default Footer;