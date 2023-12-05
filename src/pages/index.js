import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Form from "../components/form"
import AboutBlock from "../components/aboutblock"
import { Link, graphql } from "gatsby"

const IndexPage = ({ data }) => {
const { nodes } = data.allDatoCmsCategory;
const { site } = data;
return (
    <Layout>
        <Seo title="Главная" />
        <section className="lead">
            <div className="container">
            <div className="lead__title">
                <h1>
                Доходная недвижимость
                <br /> в Сочи
                </h1>
            </div>
            <div className="lead__bottom">
                <div className="lead__socials">
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
                <div className="lead__link">
                    <Link to={`/objects`} className="lead__link-tag">
                        Смотреть все предложения
                    </Link>
                </div>
            </div>
            </div>
        </section>
        <section className="categories">
            <div className="container">
            <div className="categories__grid">
                {nodes.map(object => {
                    return (
                    <div key={object.id} className="category__item">
                        <Link to={`/objects/${object.url}`}>
                            <div className="category__title">{object.title}</div>
                            <div className="category__image">
                                <img src={object.image.url} alt={object.title} />
                            </div>
                        </Link>
                    </div>
                    )
                })}
            </div>
            </div>
        </section>

        <AboutBlock full={true} />

        <section className="call">
            <div className="container">
            <h2>Покупайте доходную недвижимость с помощью наших экспертов!</h2>
            <div className="call__button">
                <a href={site.siteMetadata?.phone} className="btn">
                Позвонить Брокеру {site.siteMetadata?.phone}
                </a>
            </div>
            </div>
        </section>

        <Form />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
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
        allDatoCmsCategory {
            nodes {
                id
                title
                url
                image {
                    url
                }
            }
        }
    }
`