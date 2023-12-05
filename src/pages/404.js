import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: "96px",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}

const paragraphStyles = {
  marginBottom: 48,
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Страница<br />не найдена</h1>
      <p style={paragraphStyles}>
        К сожалению запрашиваемая страница не найдена
        <br /><br />
        <Link to="/" className="btn">Вернуться на сайт</Link>
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Страница не найдена</title>
