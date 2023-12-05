import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Similiars = ({ objects }) => {
return (
    <>
    <section>
        <div className="container">
        <div className="similars">
            <div className="similars__title">
            <h2>Похожие предложения</h2>
            </div>
            <div className="objects__list">
                {objects.map(object => {
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
            <div className="similars__button">
            <Link to={`/objects`} className="btn btn-black">
                Смотреть все
            </Link>
            </div>
        </div>
        </div>
    </section>
    </>
)
}

export default Similiars