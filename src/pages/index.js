import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Blurb from "../components/blurb"
import About from "../components/about"
import Portfolio from "../components/portfolio"
import Footer from "../components/footer"

import "../global.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Alex Felix Bendaña" />
    <Hero />
    <Blurb />
    <About />
    <Portfolio />
    <Footer />
  </Layout>
)

export default IndexPage
