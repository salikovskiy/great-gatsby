import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <h1>About</h1>
    <p>Creative and passionate web developer</p>
    <Link to="/contacts">Contacts</Link>
  </Layout>
)

export default AboutPage
