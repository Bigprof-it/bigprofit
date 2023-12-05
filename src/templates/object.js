import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Form from "../components/form"
import Similars from "../components/similars"
import AboutBlock from "../components/aboutblock"
import Slider from "react-slick";
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Object = ({ data }) => { 
    const obj = data.datoCmsObject
    const params = JSON.parse( obj.params )
    return (
    <Layout>
        <Seo title={obj.title} />
        <section className="head head__object">
            <div className="container">
            <div className="head__title">
                <Link to={`/`} className="head__link head__link_back">
                    Назад на главную
                </Link>
                <h1>{obj.title}</h1>
            </div>
            <div className="head__info">
                <div className="head__text">{obj.address}</div>
                <ul className="object__params head__params">
                    <li>{obj.unit} </li>
                    <li>{obj.price} </li>
                </ul>
            </div>
            </div>
        </section>
        <section className="object-card">
            <Slider className="object-card__images" dots={false}>
                {obj.images.map((image, i) => {
                    const img = getImage(image);
                    return (
                    <div key={i}>
                        <div className="object-card__image">
                            <GatsbyImage image={img} alt={obj.title} />
                        </div>
                    </div>
                    )
                })}
            </Slider>

            <div className="container">
                <div className="object-card__info">
                    <div className="object-card__content" dangerouslySetInnerHTML={{ __html: obj.text }}></div>
                    <div className="object-card__params">
                        <ul>
                        {params.map((param, i) => {
                            return (
                            <li key={i}>
                                <span>{param.name}</span>
                                <span>{param.value}</span>
                            </li>
                            )
                        })}
                        </ul>
                    </div>
                </div>
                <div className="object-card__button">
                    <a href="tel:{data.site.siteMetadata?.phone}" className="btn">Позвонить Брокеру {data.site.siteMetadata?.phone}</a>
                </div>
            </div>
        </section>
        
        {obj.similars.length > 0 && <Similars objects={obj.similars} />}

        <AboutBlock full={false} />

        <Form />
    </Layout>
  )
}

export default Object

export const query = graphql`
    query ObjectQuery($url: String) {
        datoCmsObject(url: {eq: $url}) {
            id
            unit
            title
            text
            similars {
                id
                uid
                title
                price
                unit
                url
                category {
                    url
                }
                address
                image {
                    gatsbyImageData(placeholder: BLURRED)
                }
            }
            price
            params
            category {
                url
                title
            }
            address
            images {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        site {
            siteMetadata {
                phone
            }
        }
    }
`
