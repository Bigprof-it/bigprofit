import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const BlacklistPage = () => {
  return (
    <Layout>
        <Seo title="Черный список" />
        <section className="head">
            <div className="container">
                <div className="head__title">
                    <Link to={`/`} className="head__link head__link_back">
                    Назад на главную
                    </Link>
                    <h1>Черный список</h1>
                </div>
            </div>
        </section>
        <article>
            <div class="container">
                Content
            </div>
        </article>
    </Layout>
  )
}

export default BlacklistPage