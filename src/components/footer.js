import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Footer = () => {
const { site } = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    phone
                    telegram
                    whatsapp
                    youtube
                    instagram
                    email
                }
            }
        }
    `
)

return (
<footer>
  <div className="container">
    <div className="footer">
      <div className="footer__col">
        <div className="footer__title">Навигация</div>
        <div className="footer__content">
          <ul>
            <li>
                <Link to={`/`}>Главная</Link>
            </li>
            <li>
                <Link to={`/objects`}>Объекты</Link>
            </li>
            <li>
                <Link to={`/blacklist`}>Черный список</Link>
            </li>
            <li>
                <Link to={`/about`}>О компании</Link>
            </li>
            <li>
                <Link to={`/contact`}>Связаться</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__col footer__col-middle">
        <div className="footer__title">E-mail</div>
        <div className="footer__content">
          <a href="mailto:{site.siteMetadata?.email}">{site.siteMetadata?.email}</a>
        </div>
      </div>
      <div className="footer__col footer__col-last">
        <div className="footer__title">Телефон</div>
        <div className="footer__content">
          <a href="tel:{site.siteMetadata?.phone}">{site.siteMetadata?.phone}</a>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="copyright__left">
        © {new Date().getFullYear()} Bigprofit. Все авторские права защищены.
      </div>
      <div className="copyright__right">
        <ul className="socials">
          <li>
            <a href={site.siteMetadata?.telegram} target="_blank" rel="noreferrer">Telegram</a>
          </li>
          <li>
            <a href={site.siteMetadata?.youtube} target="_blank" rel="noreferrer">Youtube</a>
          </li>
          <li>
            <a href={site.siteMetadata?.instagram} target="_blank" rel="noreferrer">instagram</a>
          </li>
          <li>
            <a href={site.siteMetadata?.whatsapp} target="_blank" rel="noreferrer">Whatsapp</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
)
}

export default Footer