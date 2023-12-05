import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <Layout>
        <Seo title="О компании" />
        <section className="head">
            <div className="container">
                <div className="head__title">
                    <Link to={`/`} className="head__link head__link_back">
                    Назад на главную
                    </Link>
                    <h1>О компании</h1>
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

export default AboutPage