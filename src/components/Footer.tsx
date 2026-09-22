import { images, site } from '../config/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img
            src={images.logo}
            alt={`Logo ${site.product} · ${site.brand}`}
            className="footer__logo-img"
            width={72}
            height={24}
            loading="lazy"
            decoding="async"
          />
        </div>

        <nav className="footer__nav" aria-label="Navegação do rodapé">
          <a href="#inicio">Início</a>
          <a href="#metodo">Método</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#faq">Dúvidas</a>
        </nav>

        <p className="footer__legal">
          © {new Date().getFullYear()} {site.brand}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}