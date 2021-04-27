import './Footer.css';

function Footer() {


  return (
     <div className="Footer">
      <div className="footer-parent">
        <div className="footer-links">
<ul className="footer-links1">
  <li>Menu</li>
  <li>Stores</li>
  <li>FAQS</li>
  <li>Contact</li>
  <li>A propos</li>
  <li>Terms et conditions</li>
</ul>
        </div>
        <div className="footer-reseaux">
<div><h2>Rester connécté</h2></div>
<div className="reseaux-childs">
  <img src="/facebook-square-brands.svg"  alt="" width="60px" height="35px"/>
  <img src="/instagram-square-brands.svg"  alt="" width="60px" height="35px"/>
  <img src="/facebook-square-brands.svg"  alt="" width="60px" height="35px"/>
</div>
        </div>

      </div>

    </div>
  );
}

export default Footer;
