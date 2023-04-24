import { wpp, email, footer, instagram } from "./styles.module.css";

export function Footer() {
  return (
    <footer className={footer}>
      <div className="Contatos">
        <h4>Contato</h4>
        <div className="d-flex align-items-center gap-5">
          <div className="whatsapp">
            <span>Whatsapp</span>
            <a
              className="d-flex align-items-center gap-2"
              href="https://wa.me/5521982993019"
            >
              <div className={wpp}>
                <i class="bi bi-whatsapp"></i>
              </div>
              (21)96590-3512
            </a>
          </div>
          <div className="email">
            <span>Email</span>
            <a
              className="d-flex align-items-center gap-2"
              href="mailto:andressaricardo30@gmail.com"
            >
              <div className={email}>
                <i class="bi bi-envelope-at-fill"></i>
              </div>
              andressaricardo30@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="redes">
        <h4>Redes sociais</h4>
        <div className="instagram">
          <a className="d-flex align-items-center gap-2" href="">
            <div className={instagram}>
              <i class="bi bi-instagram"></i>
            </div>
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
