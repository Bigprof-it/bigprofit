import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Form from "../components/form"
import Filter from "../components/filter"
import { useLayoutEffect, useState } from "react";
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ObjectsPage = ({ data }) => {
const { nodes } = data.allDatoCmsObject;
const [fixed, setFixed] = useState(false);

useLayoutEffect(() => {
    const onScroll = () => {
        setFixed( (window.scrollY >= 320) )
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
}, []);

return (
    <Layout>
        <Seo title="Объекты" />
        <section className="head">
            <div className="container">
            <div className="head__columns">
                <div className="head__title">
                    <Link to={`/`} className="head__link head__link_back">
                        Назад на главную
                    </Link>
                    <h1>Проверенные объекты недвижимости</h1>
                </div>
                <Filter current="" />
            </div>
            </div>
        </section>
        <section className={`head head__fixed ${fixed ? ' head__fixed_fix' : ''}`}>
            <div className="container">
            <div className="head__columns">
                <div className="head__title">
                    <Link to={`/`} className="head__link head__link_back">
                        Назад на главную
                    </Link>
                </div>
                <Filter current="" />
            </div>
            </div>
        </section>
        <section>
            <div className="container">
            <div className="objects">
                <div className="objects__list">
                    {nodes.map(object => {
                        const img = getImage(object.image);
                        return (
                        <div key={object.id} className="object">
                            <Link to={`/objects/${object.category.url}/${object.url}`} >
                                <div className="object__image">
                                    <GatsbyImage image={img} alt={object.title} />
                                </div>
                                <div className="object__info">
                                    <div className="object__title">{object.title}</div>
                                    <ul className="object__params">
                                        <li>{object.unit}</li>
                                        <li>{object.price}</li>
                                    </ul>
                                </div>
                                <div className="object__text">{object.address}</div>
                            </Link>
                        </div>
                        )
                    })}
                </div>
                {/* <div className="pagination">
                    <ul>
                        <li className="pagination__prev">
                        <a href="#">Предыдущая</a>
                        </li>
                        <li className="pagination__next">
                        <a href="#">Следующая</a>
                        </li>
                    </ul>
                </div> */}
            </div>
            </div>
        </section>
        <Form />
    </Layout>
  )
}

export default ObjectsPage

export const query = graphql`
query Objects {
    allDatoCmsObject {
        nodes {
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
    }
}
`