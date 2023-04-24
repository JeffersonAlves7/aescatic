import { wpp, flex, email, foter, instagram } from "./styles.module.css";

export function Footer() {
  return (
    <footer className={foter}>
      <div className={flex}>
        <h4>Contato</h4>
        <div className="whatsapp">
          <label htmlFor="">Whatsapp</label>
          <a className={flex} href="">
            <div className={wpp}>
              <i class="bi bi-whatsapp"></i>
            </div>
            <a href="https://wa.me/5521982993019">(21)96590-3512</a>
          </a>
        </div>
        <div className="email">
          <label htmlFor="">Email</label>
          <a className={flex} href="">
            <div className={email}>
              <i class="bi bi-envelope-at-fill"></i>
            </div>
            <a href="mailto:andressaricardo30@gmail.com">
              andressaricardo30@gmail.com
            </a>
          </a>
        </div>
      </div>
      <div>
        <h4>Redes sociais</h4>
        <div className={instagram}>
          <i class="bi bi-instagram"></i>
        </div>
        <a href="">Instagram</a>
      </div>
    </footer>
  );
}
