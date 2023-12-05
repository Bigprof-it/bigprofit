import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useState } from "react";

const Filter = ({ current }) => {
    const query = useStaticQuery(
        graphql`
            query {
                allDatoCmsCategory {
                    nodes {
                        title
                        url
                        image {
                            url
                        }
                    }
                }
            }
        `
    )
    const { nodes } = query.allDatoCmsCategory

    let currentObject = nodes.find((category) => {
        return category.url === current;
    });
    const [openFilter, setOpenFilter] = useState(false);

    return (
        <>
        <div className="head__filter">
            <div className="head__filter-title">Показывать объекты</div>
            <div className={`head__filter-droprown${openFilter ? ' active' : ''}`}>
                <span onClick={() => setOpenFilter( !openFilter )}>{`${currentObject ? currentObject.title : "Все"}`}</span>
                <ul className="head__filter-list">
                    <li className={`${current === '' ? "active" : ""}`}>
                        <Link to={`/objects`}>Все</Link>
                    </li>
                    {nodes.map((category, i) => {
                        return (
                        <li key={i} className={`${currentObject?.url === category.url ? "active" : ""}`}>
                            <Link to={`/objects/${category.url}`}>{category.title}</Link>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
        </>
    )
}

export default Filter